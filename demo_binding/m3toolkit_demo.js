var DevModel = Backbone.Model.extend({
	defaults:{
		age: undefined,
		name: undefined,
		sername: undefined,
		city: undefined,
	}
});

function plural(age, one, little, many){
	var     minAge = age - ~~(age / 10) * 10;
	return (age < 5 && age > 0) || ( age > 20 && minAge > 0) ? (minAge == 1 ? one : (minAge < 5 ? little : many)) : many;
};

var Toolkit = window.m3toolkit;
var DevView = Toolkit.BlockView.extend({
	className: 'dev-class',
	template: 
	// Collect DOM nodes with attributes `data-co`
		'<div class="wrap">' +
			'<div class="m3-middle">' +
				'<span class="">Имя</span><input data-co="name-input"/>' +
			'</div>' +	
			'<div class="m3-middle">' +
				'<span class="">Фамилия</span><input data-co="sername-input"/>' +
			'</div>' +	
			'<div class="m3-middle">' +
				'<span class="">Возраст</span><input data-co="age-input"/>' +
			'</div>' +	
			'<div class="m3-middle">' +
				'<span class="">Город</span><input data-co="city-input"/>' +
			'</div>' +
			'<div class="header-wrap">' +
				'<div class="header">Статус заполненных данных</div>' +
				'<div class="" data-co="computed-fio">will be computed</div>' +
				'<div class="" data-co="computed-age-liter">will be computed</div>' +
				'<div class="" data-co="city">will be computed</div>' +
			'</div>' +
		'</div>',
	defineBindings: function(){
		this._addComputed('computedFio', ['name', 'sername'], function(control, model){
			var 	sername = model.get('sername'),
					name = model.get('name');
			
			if(name && sername){
				control.text('Абонент: ' + sername + ' ' + name);
				control.removeClass('warning');
			}else{
				if(name){
					control.text('Фамилия абонента не заполнена');
				}else if(sername){
					control.text('Имя абонента не заполнено');
				}else{
					control.text('Полное имя абонента не заполнено');
				}
				control.addClass('warning');
			}
			
		})._addComputed('computedAgeLiter', 'age', function(control, model){
			var age = model.get('age');
			
			control.text(age ? 'Указанный возраст: ' + age + ' ' + plural(age, 'год', 'года' ,'лет') : 'Возраст не указан');
			control[age ? 'removeClass' : 'addClass']('warning');
		});
		
		/*this._addComputed('field2', 'field2', function(control, model){
			console.log('TRIG Field2');
			control.text('COMPUTED F2: ' + model.get('field2') + ' [CCC]');
		});*/
		
		this._addTransform('city', function(control, model){
			var city = model.get('city');
			
			if(city){
				control.text('Город: ' + city);
				control.removeClass('warning');
			}else{
				control.text('Город не указан');
				control.addClass('warning');
			}
		});
	},
	events: {
		'change [data-co="age-input"]': function(e){
			var target = e.target || e.srcElement;
			this.model.set('age', parseInt(target.value));
		},
		'change [data-co="name-input"]': function(e){
			var target = e.target || e.srcElement;
			this.model.set('name', target.value.trim());
		},
		'change [data-co="sername-input"]': function(e){
			var target = e.target || e.srcElement;
			this.model.set('sername', target.value.trim());
		},
		'change [data-co="city-input"]': function(e){
			var target = e.target || e.srcElement;
			this.model.set('city', target.value.trim());
		}
		
	}
});

var devView = new DevView({
	model: new DevModel(),
	el: '#demo-app'
});