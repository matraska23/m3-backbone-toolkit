/* 
M3 toolkit - toolkit for Backbone apps v2
Copyright (C) Malcev N. 2013, 2014
*/
(function(_env){
	var $m = {
		// @memberOf $m - Проверяет, принадлежит ли аргумент к типу функции
		// @param {Object} obj
		// @return {Bool} - true if obj is a function
		isFunction: function(obj){
			return this.instance(obj) === '[object Function]'; 
		},
		// @memberOf $m - возвращает тип оБъекта
		// @return {Object} obj
		// @return {String}
		instance: function(obj){return Object.prototype.toString.call(obj);},
		isNumber: function(obj){return this.instance(obj) === '[object Number]';},
		isString: function(obj){return this.instance(obj) === '[object String]';},
		isRegExp: function(obj){return this.instance(obj) === '[object RegExp]';},
		isBoolean: function(obj){return this.instance(obj) === '[object Boolean]';},
		isObject: function(o){return o === Object(o);},
		// @memberOf $m - check if Object Empty
		// @param {Object} o
		// @return {Bool}
		isEmpty: function(o){
			if(!this.isObject(o)){
				return false;
			}

			for(var i in o){
				if(o.hasOwnProperty(i)){
					return false;
				}
			}

			return true;
		},
		defined: function(o){return typeof o != "undefined";},
		// ES5 extend implementation
		extend: function (target, source) {
			Object.
				getOwnPropertyNames(source).
				forEach(function(propKey) {
					var desc = Object.getOwnPropertyDescriptor(source, propKey);
					Object.defineProperty(target, propKey, desc);
				});
			return target;
		}
	};

	var toolkit = {};
	
	// View for representation of Backbone collection
	toolkit.CollectionView = Backbone.View.extend({
		tagName: 'div',
		// @param {Object} conf - default collection config
		// 	conf.prependAdded: true - added items would be prepended in collection
		// @param {Backbone.View} view - view for items
		initialize: function(conf, view){
			this.children = {};
			this.itemView = view;

			if(!this.itemView){
				throw("CollectionView couldn't be rendered with undefined `itemView` property");
			}
			this.render();

			this.listenTo(this.collection, 'add', function (model) {
				this.$el[!conf.prependAdded ? 'append' : 'prepend'](this._storeItem(model).el);
			});
			this.listenTo(this.collection, 'reset', function (newModels) {
				this.cleanChildren();
				this.render(newModels);
			});
		},
		render: function(anotherCollection){
			var fragment = document.createDocumentFragment();

			(anotherCollection || this.collection).each(function (model) {
				fragment.appendChild(this._storeItem(model).el);
			}.bind(this));
			this.$el.append(fragment);
		},
		_storeItem: function(model){
			var view = new this.itemView({model: model});
			view.baseView = this;
			this.children[model.cid] = view;
			return view;
		},
		cleanChildren: function(){
			_.each(this.children, function (child) {
				child.baseView = null;
				child.$el.off().remove();
				child.remove();
			});
			this.children = {};
		},
		remove: function(){
			this.cleanChildren();
			this.$el.off().empty();
			Backbone.View.prototype.remove.call(this);
			return this;
		}
	});
	
	// Simple View for underscore template engine
	// Attention: you can define `tool` object with custom method`s that would be available in template!
	toolkit.View = Backbone.View.extend({
        initialize: function () {
            this.children = {};
            this.render();
        },
        render: function(tools){
			if(typeof(this.template) == 'function'){
				var 	modelJSON = this.model ? this.model.toJSON({computed: true}) : {};
				
				modelJSON._tools = tools || this.tools;
				this.el.innerHTML = this.template(modelJSON);
			}else if(typeof(this.template) == 'string' && this.template.indexOf('<%') == -1){
				this.el.innerHTML = this.template;	
			}else if(this.template){
				this.template = _.template(this.template);
				return this.render(tools);
			}

			return this; 
        },
        remove: function() {
			this.trigger('remove');
			_.each(this.children, function (view) {
			    view.remove();
			});
			this.$el.off().empty();
			this.stopListening();
			this.controls = null;
			return this;
        }
    });
	
	// View with predefined binding engine to model attributes
	toolkit.BlockView = Backbone.View.extend({
		initialize: function(){
			this.children = {};
			this.render();
			this._m3bindingInit();
		},
		
		_m3bindingInit: function(){
			this._computeds = {};
			this._dependendsIndex = 0;
			this._transformers = {};
			
			this.defineBindings();
			// call refresh with init values 
			// Attention: without bindings!
			if(this.model){
				this._m3refresh(this.model.toJSON());
				this.listenTo(this.model, "change", function(modelState){
					// modelState.changed - updated Model properties
					this._m3refresh(modelState.changed);
				}.bind(this));
			}
		},
		
		// init bindings
		defineBindings: function(){},
		
		// add new computed binding. like virtual `data-co` attributes - update view partition by modifications of depends model properties
		// @param {String} name
		// @param {Array} depends
		// @param {Function} cb
		_addComputed: function(name, depends, cb){
			if(!Array.isArray(depends)){ // define new depends
				depends = [depends];
			}
			
			depends.forEach(function(dependName){
				// to prevent double callback execution
				var curDepIndex = this._dependendsIndex;
				
				if(!Array.isArray(this._computeds[dependName])){
					this._computeds[dependName] = [];
				}
				
				this._computeds[dependName].push(function(value, dependsList){
					if(dependsList.indexOf(curDepIndex) == -1){
						dependsList.push(curDepIndex);
						cb.call(this, this.controls[name], value);
					}
				}.bind(this));
			}.bind(this));
			
			this._dependendsIndex++;
			return this;
		},
		// @TODO: сделать перегрузку аргументов!
		// add new transformation of model property in view  [model:property] -> [transformer] -> [view:property] 
		// @param {String} name - model property name
		// @param {Function} cb - callback for value modification
		// @param {String} viewPropertyName - optional destination view property
		_addTransform: function(name, cb, viewPropertyName){
			if(!Array.isArray(this._transformers[name])){
				this._transformers[name] = [];
			}
			
			this._transformers[name].push(function(value){
				cb.call(this, this.controls[viewPropertyName || name], value, value.get(name));
			}.bind(this));
		},
		render: function(tools){
			if(typeof(this.template) == 'function'){
				var 	modelJSON = this.model ? this.model.toJSON({computed: true}) : {};
				
				modelJSON._tools = tools || this.tools;
				this.el.innerHTML = this.template(modelJSON);
			}else if(typeof(this.template) == 'string' && this.template.indexOf('<%') == -1){
				this.el.innerHTML = this.template;	
			}else if(this.template){
				this.template = _.template(this.template);
				return this.render(tools);
			}

			this.controls = {};
			this._bindByRole();
			return this; 
		},
		remove: function(){
			_.each(this.children, function (view) {
                view.remove();
            });
			this.$el.off().empty();
			this.controls = null;
			Backbone.View.prototype.remove.call(this);
			return this;
		},
		// @param {HtmlElement} $target
		_bindByRole: function($target){
			var 	CATCH_DEFIS = /-(\w)/g,
					replaceDefis = function(str, p1) {return p1.toUpperCase();},
					roleNodes = ($target || this.el).querySelectorAll('[data-co]');
				
			for(var i = 0, len = roleNodes.length, field; i < len; i++){
				field = roleNodes[i].dataset.co.replace(CATCH_DEFIS, replaceDefis);
				this.controls[field] = $(roleNodes[i]);
			}
		},
		// @param {Object} modelObj - object with model properties
		_m3refresh: function(modelObj){
			var 	_depExecuteList = [];

			_.each(modelObj, function(changedValue, changedPropertyName){
				var _model = this.model;
				
				if(this._computeds[changedPropertyName]){
					this._computeds[changedPropertyName].forEach(function(callback){
						callback(_model, _depExecuteList);
					});
				}
				
				if(this._transformers[changedPropertyName]){
					this._transformers[changedPropertyName].forEach(function(callback){
						callback(_model);
					});
				// update for primitive types. Skip items with transformers!
				}else if(!$m.isObject(changedValue) && this.controls[changedPropertyName] != undefined){
					this.controls[changedPropertyName].text(changedValue);
				}
			}.bind(this));
		}
	});
	
	if(typeof define === "function" && define.amd){
		define(function() {
			return toolkit;
		});
	}else if(typeof module === "object" && module && typeof module.exports === "object" && module.exports){
		module.exports = toolkit;
	}else{
		window.m3toolkit = toolkit;
	}
}(function(){
	return this || window;
}()));