(function(){

var 	View = window.m3toolkit.View,
		BlockView = window.m3toolkit.BlockView,
		CollectionView = window.m3toolkit.CollectionView,
		_base = {};

var MemberModel = Backbone.Model.extend({
	defaults: {
		self: false,
		hobbyList: []
	}
});

var HobbyItemModel = Backbone.Model.extend({
	defaults: {
		self: false,
		text: ''
	}
});

var ProfileCollection = Backbone.Collection.extend({
	model: MemberModel
});

var HobbyCollection = Backbone.Collection.extend({
	model: HobbyItemModel
});

var HobbyItemView = View.extend({
	className: 'app_prof-block_hobby-item',
	template:
	'<div class="app_prof-block_hobby-item-content <%=obj.self ? "app_prof-block_hobby-item-self": "" %>">' +
		'<div class="app_prof-block_hobby-item-content-text"><%=obj.text %></div>' +
		'<% if(obj.self){ %>' +
			'<div class="app_prof-block_hobby-item-remove"></div>' +
		'<% }else{ %>' +
			'<div class="app_prof-block_hobby-item-add"></div>' +
			'<div class="app_prof-block_hobby-item-complaint">пожаловаться</div>' +
			'<span class="app_prof-block_add-icn">добавлены в ваши увлечения</span>' +
		'<% } %>' +
	'</div>',
	initialize: function(){
		View.prototype.initialize.call(this);
	},
	events: {
		'click .app_prof-block_hobby-item-remove': function(e){
			var bv = this.baseView;
			bv.collection.remove(bv.model);
			this.remove();
		},
		'click .app_prof-block_hobby-item-add': function(){
			var text = this.model.get('text');
			_base.selfCollection.add({
				self: true,
				text: text
			});
			this.$('.app_prof-block_hobby-item-content').addClass('app_prof-block_hobby-item-content-added');
		},
		'click .app_prof-block_hobby-item-complaint': function(){
			alert('complaint popup');
		}
	}
});


var ProfileView = View.extend({
	className: 'app_prof-block',
	template: 
	'<div class="app_prof-block_title"><%=obj.self ? "О себе" : "Интересы друга" %></div>' +
	'<div class="app_prof-block_line"><div class="app_prof-block_line-inner">Хобби</div></div>' +
	'<div class="app_prof-block_list-wrap">' +
		'<% if(obj.self){ %>' +
			'<div class="">' +
				'<input type="text" placeholder="введите текст" data-bind="input" class="app_prof-block_input"/>' +
			'</div>' +
		'<% } %>' +
		'<div class="app_prof-block_shortlist" data-bind="list"></div>' +
		'<div class="app_prof-block_list-count" data-bind="count">еще <%=obj.hobbyList.length - 2 + " " +_tools.plural(obj.hobbyList.length - 2 , "интерес", "интереса", "интересов")%></div>' +
	'</div>',
	tools: { // would be available inside of underscore template as obj._tools or _tools
		plural: function(age, one, little, many){
			var     minAge = age - ~~(age / 10) * 10;
			return (age < 5 && age > 0) || ( age > 20 && minAge > 0) ? (minAge == 1 ? one : (minAge < 5 ? little : many)) : many;
		}
	},
	initialize: function(){
		View.prototype.initialize.call(this);
		
		var isSelf = this.model.get('self');
		var collection = new HobbyCollection(this.model.get('hobbyList').map(function(text){
			return {
				self: isSelf,
				text: text
			};
		}));
		
		var hobbyCollection = new CollectionView({
			collection: collection, 
			el: this.$('[data-bind=list]'),
			prependAdded: true
		}, HobbyItemView);
		
		this.children.list = hobbyCollection;
		
		if(isSelf){
			_base.selfCollection = collection;
			this.listenTo(collection, 'add', function(){
				var 	count = collection.length - 2,
						label = 'еще ' + count + " " + this.tools.plural(count , "интерес", "интереса", "интересов");
				
				if(this.$('[data-bind=list]').hasClass('app_prof-block_shortlist')){
					this.$('[data-bind=count]').text(label);	
				}else{
					this._label = label;
				}
			});
		}
	},
	events: {
		'keydown .app_prof-block_input': function(e){
			e.stopPropagation();
			var target = $(e.target);
			
			if(e.keyCode == 13){
				e.preventDefault();
				_base.selfCollection.add({
					self: true,
					text: target.val()
				});
				target.val('');
			}
		},
		'click [data-bind=count]': function(e){
			var 	target = $(e.target),
					list = this.$('[data-bind=list]');
			
			if(list.hasClass('app_prof-block_shortlist')){
				this._label = target.text();
				target.text('свернуть');
				list.removeClass('app_prof-block_shortlist')
			}else{
				target.text(this._label);
				list.addClass('app_prof-block_shortlist')
			}
		}
	}
});


_base.members = [{
	self: true,
	hobbyList: ['Хоккей', 'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01', 'Верстка в восточном стиле']
},{
	self: false,
	hobbyList: ['Баскетбол', 'Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе', 'Деплой в стиле ретро']
}];

_base.init = function(){
	var appView = new CollectionView({
		collection: new ProfileCollection(_base.members),
		el: $('#app')
	}, ProfileView);
};

_base.init();
}());