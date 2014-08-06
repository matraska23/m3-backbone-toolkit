(function(){

var slides = [
	{title: 'Работы для отдела Клиентского сервиса и сапорта ФС\nТикетная админка, админка массовых сбоев',
		works: [
			{img: 'i/works/ticket-admin.png', description: 
			'<div class="presentation_mb10"><strong>Тикетная админка</strong></div>' +
			'<div class="presentation_mb10">Через эту админку сотрудники сапорта работают с обращениями пользователей соц. сети. Мною была реализована вся верстка раздела и код на js.</div>' +
			'<div class="presentation_mb10">Особенности:</div>' +
			'<ul class="presentation-list">' +
				'<li>Интерфейс занимают всю высоту экрана монитора - резиновый по вертикали (На странице могут быть три внутреннии области со скролом );</li>' +
				'<li>Автоподгрузка новых тикетов;</li>' +
				'<li>Большое число кастомных элементов управления.</li>' +
			'</ul>'
			},
			
			{img: 'i/works/ticket-admin2.png', description: 
				'<div class="presentation_mb10"><strong>Админка массовых сбоев</strong></div>' +
				'<div class="presentation_mb10">Инструмент взаимодействия сотрудников сапорта и тестеровщиков. При наличие однотипных обращений пользователей, их тикеты групируются в массовый сбой. Который попадает к тестировщикам в виде таска в редмайн для исследования.</div>'
			},
			{img: 'i/works/ticket-admin3.png', description: 'Диалог просмотра массового сбоя.'},
			{img: 'i/works/ticket-admin4.png', description: 'Пример реализации кастомного выпадающего списка.'},
		]
	},{title: 'Отдел модерации \nПопапы жалоб, страница заблокированного пользователя',
		works: [
			{img: 'i/works/complaint_popup.png', description: 
				'<div class="presentation_mb10"><strong>Попап подачи жалоб на пользователя</strong></div>' +
				'<div class="">Мною была реализована вся frontend часть - верстка и код на js.</div>'
			},{img: 'i/works/abusePopups.jpg', description: 
				'<div class="">Реализовано несколько кейсов с  последовательной навигацией.</div>'
			},{img: 'i/works/complaint_popup1.png', description: 
				'<div class="">Содержимое попапа - вопросник с готовыми ответами и возможностью отправить расширенное описание.</div>'
			},
			
			
			{img: 'i/works/abuse_form.jpg', description: 
			'Различные варианты попапов жалоб на нарушения со стороны пользователей. Попапы показываются на странице пользователя.'},
			{img: 'i/works/abuse_page.jpg', description: 
			'Страница заблокированного пользователя. Реализована в нескольких вариантах для удаленного пользователя и расширенной для сотрудников Фотостраны. Мною была реализована верстка (html/php).'},
		]
	},{title: 'Раздел помощи (FAQ)',
		works: [
			{img: 'i/works/faq1.png', description: 
				'<div class="presentation_mb10">В разделе помощи я занимался поддержкой старого кода, правил баги. Поэтому там моя верстка присутствует только фрагментами. К примеру этот опросник сверстан мной. Весь hover эффект при выборе количества звезд реализован только на css.</div>' +
				'<div class="presentation_mb10">Раздел располагается по ссылке <a href="http://fotostrana.ru/support/feedback/ask/" target="_blank">http://fotostrana.ru/support/feedback/ask/</a></div>'},
			
		]
	},{title: 'Раздел "Мои финансы"',
		works: [
			{img: 'i/works/finroom.png', description: 
				'<div class="presentation_mb10"><strong>Раздел "Мои финансы" страницы пользователя</strong></div>' +
				'<div class="presentation_mb10">Мною была реализована верстка и необходимый код на js.</div>' +
				'<div class="presentation_mb10">Раздел располагается по ссылке <a href="http://fotostrana.ru/finance/index/" target="_blank">http://fotostrana.ru/finance/index/</a></div>'
			},
			{img: 'i/works/finroom2.png', description: 
				'<div class="presentation_mb10">Для страницы было реализовано много различных блоков показываемые разным сегментам пользовательской аудитории.</div>'},
			{img: 'i/works/finroom3.png', description: 'Так же мною были сверстаны различные попапы сопутсвующих премиальных услуг, доступные из этого раздела.'},
			{img: 'i/works/autopay1.png', description: 'Попап услуги &laquo;Автоплатеж&raquo;'},
			{img: 'i/works/fotocheck.png', description: 'СМС информирование'},
			{img: 'i/works/finroom4.png', description: ''},
		]
	},{title: 'Финансовый попап \nПопап пополнения счета пользователя',
		works: [
			{img: 'i/works/finpopup1.png', description: 
				'<div class="presentation_mb10">Попап с большим количеством переходов и кастомными элементами управления.</div>' +
				'<div class="presentation_mb10">Мною была сделана необходимая верстка и js код.</div>'
			},
			{img: 'i/works/finpopup2.png', description: 
				'<div class="presentation_mb10">Из сложных деталей интерфейса:</div>' +
				'<ul class="presentation-list">' +
					'<li>"резиновые" кнопки ввода необходимой суммы Фотомани, с возможностью указать произвольную сумму;</li>' +
					'<li>контроль за вводом и валидация пользовательских данных.</li>' +
				'</ul>'
			},
			{img: 'i/works/finpopup3.png', description: ''},
		]
	},{title: 'Сервис "Я модератор"',
		works: [
			{img: 'i/works/imoderator1.jpg', description: 
				'<div class="presentation_mb10"><strong>Сервис "Я модератор"</strong> - пользователям за вознаграждение передается часть модерируемого контента.</div>' +
				'<div class="">Мною была выполнена вся верстка и весь js код. Из сложных деталей интерфеса - флип часы, реализованные с использованием css3 animation.</div>'
			},
			{img: 'i/works/imoderator2.jpg', description: 
				'<div class="presentation_mb10">В приложении реализовано несколько режимов модерации, в том числе и полно экранный режим (резиновый, скрывающий стандартный лэйаут страниц соц. сети).</div>' +
				'<div class="">Так же в приложении реализованы инструменты для мотивации "качественной" оценки фотографий пользователями. Используются тестовые проверочные изображения, принудительная отправка в режим обучения и поиск дубликатов изображений в Google/Yandex.</div>'
			},
		]
	},{title: 'Сервис "Голосование"',
		works: [
			{img: 'i/works/contest.jpg', description: 
				'<div class="presentation_mb10"><strong>Сервис "Голосование"</strong> - один из основных по доходности сервисов Фотостраны с большой аудиторией</div>' +
				'<div class="presentation_mb10">В этом сервисе, я занимался поддержкой старого кода и версткой скидочных акций и сезонных  мероприятий по активизации пользовательской активности приуроченные к праздникам, мероприятиям (Новый год, Олимпийские игры, 8-е марта, день всех влюбленных, 23 февраля, 12 апреля и др.)</div>' +
				'<div class="presentation_mb10">Так же мною был переделан механизм рендеринга фотостены.</div>' +
				'<div class="">В сервис можно перейти по ссылке <a href="http://www.fotostrana.ru/contest/" target="_blank">www.fotostrana.ru/contest/</a></div>'
			},
			{img: 'i/works/contest1.jpg', description: 
				''},
			
		]
	},{title: 'Игровой сервис "Битва кланов"',
		works: [
			{img: 'i/works/clan1.jpg', description: 
				'<div class="presentation_mb10"><strong>Игровой сервис "Битва Кланов"</strong> - игровой под сервис голосования. Игра в форме квеста.</div>' +
				'<div>В этом сервисе я делал верстку и js код. Много кейсов, много попапов, много backbon-а. Используется sass, require.js, backbone.</div>'
			},
			{img: 'i/works/clan2.jpg', description: '<div class="">В сервис можно перейти по ссылке <a href="http://www.fotostrana.ru/contest/clan2/" target="_blank">www.fotostrana.ru/contest/clan2/</a></div>'},
			{img: 'i/works/clan4.jpg', description: 'В сервисе много сложных интерфейсных решений, как на пример поле ввода сообщения в чат. Реализовано ограничение на длину вводимого сообщения и авторесайз высоты textarea.'},
			{img: 'i/works/clan3.jpg', description: ''},
		]
	},{title: 'Сервис "Элитное голосование"',
		works: [
			{img: 'i/works/elite1.jpg', description: '<div class="presentation_mb10"><strong>Игровой сервис "Элитное голосование"</strong> - игровой под сервис голосования, доступный несколько дней в месяце для активных участников основного голосования.</div>' +
				'<div>В этом сервисе я делал верстку и js код. Внешнее оформление переделывалось мною к каждому запуску сервиса.</div>'},
			{img: 'i/works/elite2.jpg', description: ''},
		]
	},{title: 'Сервис "Люди"\nДейтинговый сервис Фотостраны',
		works: [
			{img: 'i/works/people1.jpg', description: 
				'<div class="presentation_mb10"><strong>Дейтинговый сервис "Люди"</strong> - на протяжении полу года поддерживал фронтенд сервиса - исправлял баги, верстал рекламные банеры и попапы.</div>' +
				'<div class="">В сервис можно перейти по ссылке <a href="http://fotostrana.ru/people/" target="_blank">fotostrana.ru/people/</a></div>'},
			{img: 'i/works/people2.jpg', description: ''},
		]
	},{title: 'Сообщества и пиновый интерфейс',
		works: [
			{img: 'i/works/community1.jpg', description: 
			'<div class="presentation_mb10">Некоторое время работал над версткой сообществ и пиновым интерфейсом. Концепция пинов была позаимствована у другого сервиса Pinterest. Занимался проектом начиная с первого прототипа и до предрелизной подготовкой.</div>' +
				'<div class="">В сервис можно перейти по ссылке <a href="http://fotostrana.ru/public/" target="_blank">fotostrana.ru/public/</a></div>'},
		]
	},{title: 'Сайт http://www.blik-cleaning.ru/',
		works: [
			{img: 'i/works/cleaning.jpg', description: 
				'<div class="presentation_mb10"><strong>Разработка сайта клининговой компании</strong></div>' +
				'<div>Сайт сделан на CMS WordPress с оригинальной темой. </div>'},
			{img: 'i/works/cleaning1.jpg', description: ''},
		]
	},{title: 'Сайт http://www.promalp.name/',
		works: [
			{img: 'i/works/promalp1.jpg', description: 
				'<div class="presentation_mb10"><strong>Сайт компании занимающейся промышленным альпинизмом.</strong></div>' +
				'<div>Сайт сделан на node.js (express). Полностью реализован мною.</div>'},
			{img: 'i/works/promalp2.jpg', description: 'Страница с портфолио.'},
			{img: 'i/works/promalp3.jpg', description: 'Форма заявки.'},
		]
	},{title: 'Расширение для браузера chrome Netmarks',
		works: [
			{img: 'i/works/netmarks.jpg', description: 
				'<div class="presentation_mb10"><strong>Chrome extension "NetMarks"</strong></div>' +
				'<div class="presentation_mb10">Расширение для удобной работы с браузерными закладками в виде выпадающего меню.</div>' +
				'<div class="">Доступно по ссылке в <a href="https://chrome.google.com/webstore/detail/netmarks/boepmphdpbdnficfifejnkejlljcefjb" target="_blank">Chrome store</a></div>'
			},
		]
	},{title: 'Приложение для браузера chrome Deposit.calc',
		works: [
			{img: 'i/works/depcalc1.jpg', description: 
				'<div class="presentation_mb10"><strong>Deposit.calc</strong></div>' +
				'<div class="presentation_mb10">Приложение позволяющее расчитать доход по вкладу с пополнениями. Используется собственный оригинальный алгоритм расчета.</div>' +
				'<div class="">Доступно по ссылке в <a href="https://chrome.google.com/webstore/detail/депозитный-калькулятор/cibblnjekngmoeiehohbkmcbfijpcjdj" target="_blank">Chrome store</a></div>'},
			{img: 'i/works/depcalc2.jpg', description: 'Для вывода графиков был использован highcharts.'},
		]
	},
];
var 	View = m3toolkit.View,
		CollectionView = m3toolkit.CollectionView,
		BlockView = m3toolkit.BlockView,
		_base = {
			// @param {Int} Index
			// @return {Model} model from collection by index
			getAnother: function(index){
				return this.slideCollection.at(index);
			}
		};

var SlideModel = Backbone.Model.extend({
	defaults: {
		title: '',
		works: [],
		index: undefined,
		next: undefined,
		prev: undefined
	}
});
var SlidesCollection = Backbone.Collection.extend({
	model: SlideModel,
	initialize: function(list){
		var 	i = 0,
				len = list.length
				indexedList = list.map(function(item){
					item.index = i;
					if(i > 0){
						item.prev = i - 1;
					}
					if(i < len - 1){
						item.next = i + 1;
					}
					
					if(Array.isArray(item.works)){
						item.frontImage = item.works[0].img;		
					}
					i++;
					return item;
				});
		Backbone.Collection.prototype.initialize.call(this, indexedList);
	}
});
var WorkItemModel = Backbone.Model.extend({
	defaults: {
		img: '',
		description: ''
	}
});	
var WorkItemsCollections = Backbone.Collection.extend({
	model: WorkItemModel
});
var WorkItemPreview = View.extend({
	className: 'presentation_work-item clearfix',
	template: _.template(
		'<img src="<%=img%>" class="Stretch m3-vertical "/>' +
		'<% if(obj.description){ %>' +
			'<div class="presentation_work-item_description"><%=obj.description%></div>' +
		'<% }%>'
	)
});

var SlideView = View.extend({
	className: 'presentation_slide-wrap',
	template: _.template(
		'<div style="background-image: url(<%=obj.frontImage%>)" class="presentation_front-image"></div>' +
		'<div class="presentation_front-image_hover"></div>'
	),
	events: {
		click: function(e){
			_base.openFullScreenPresentation(this.model);
		}
	},
});

var FullscreenSlideView = BlockView.extend({
	className: 'presentation_fullscreen-slide',
	template:
	'<div class="presentation_fullscreen-slide_back"></div>' +
	'<div class="presentation_fullscreen-slide_close" data-bind="close"></div>' +
	'<div class="presentation_fullscreen-slide_wrap">' +
		'<div class="presentation_fullscreen-slide_next" data-co="next">' +
			'<div class="presentation_fullscreen-slide_nav-btn presentation_fullscreen-slide_nav-btn_next "></div>' +
		'</div>' +
		'<div class="presentation_fullscreen-slide_prev" data-co="prev">' +
			'<div class="presentation_fullscreen-slide_nav-btn"></div>'+
		'</div>' +
		'<pre class="presentation_fullscreen-slide_title" data-co="title"></pre>' +
		'<div class="" data-co="works" style=""></div>' +
	'</div>',
	events: {
		'click [data-bind=close]': function(){
			_base.hideFullScreenPresentation();
		},
		'click [data-co=next]': function(){
			var nextIndex = this.model.get('next');
			nextIndex != undefined && this._navigateTo(nextIndex);
		},
		'click [data-co=prev]': function(){
			var prevIndex = this.model.get('prev');
			 prevIndex != undefined && this._navigateTo(prevIndex);
		},
	},
	_navigateTo: function(index){
		var prevModel =_base.getAnother(index);
		
		if(prevModel){
			var data = prevModel.toJSON();
			this.model.set(prevModel.toJSON());
		}
	},
	initialize: function(){
		BlockView.prototype.initialize.call(this);
		
		this.controls.prev[this.model.get('prev') != undefined ? 'show': 'hide']();
		this.controls.next[this.model.get('next') ? 'show': 'hide']();
		
		var workItemsCollection = new WorkItemsCollections(this.model.get('works'));
		this.children.workCollection = new CollectionView({
			collection: workItemsCollection,
			el: this.controls.works
		}, WorkItemPreview);
		
		this.listenTo(this.model, 'change:works', function(model){
			console.log('Works Changed');
			workItemsCollection.reset(model.get('works'));
		});
	},
	defineBindings: function(){
		this._addComputed('works', 'works', function(control, model){
			console.log('Refresh works');
			var worksList = model.get('works');
			console.dir(worksList);
		});
		
		this._addTransform('title', function(control, model, value){
			console.log('Set new Title: `%s`', value);
			control.text(value);
		});
		this._addTransform('next', function(control, model, value){
			control[value ? 'show': 'hide']();
		});
		this._addTransform('prev', function(control, model, value){
			control[value != undefined ? 'show': 'hide']();
		});
	}
});

var PresentationApp = View.extend({
	className: 'presentation-wrap',
	template: 
		'<div class="presentation-wrap_header">' +
			'<div class="presentation-wrap_header-container">' +
				'<div class="presentation-wrap_header-title clearfix">' +
					/*'<div class="presentation-wrap_header-contacts">' +
						'<div class="">Контакты для связи:</div>' +
						'<div class="">8 (960) 243 14 03</div>' +
						'<div class="">nsmalcev@bk.ru</div>' +
					'</div>' +*/
					'<h2 class="presentation_header1">Портфолио презентация</h2>' +
					'<div class="presentation_liter1">Фронтенд разработчика Николая Мальцева</div>' +
					'<div class="presentation_liter1">8 (960) 243 14 03, nsmalcev@bk.ru</div>' +
					'<div class="presentation_liter1"><a href="http://matraska231.herokuapp.com/?portfolio=1#cv" target="_blank">Резюме</a></div>' +
					
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="presentation-wrap_body" data-bind="body">' +
			'<div class="presentation-wrap_slide clearfix" data-bind="slides">' +
			'</div>' +
		'</div>' +
		'<div data-bind="fullscreen" class="presentation_fullscreen-slide" style="display: none;"></div>',
	initialize: function(){
		View.prototype.initialize.call(this);
		
		var 	$slides = this.$('[data-bind=slides]'),
				$body = this.$('[data-bind=body]'),
				slideCollection = new SlidesCollection(slides);
		
		_base.app = this;
		_base.slideCollection = slideCollection;
		
		this.children['slides'] = new CollectionView({
			collection: slideCollection,
			el: $slides
		}, SlideView);
		
		this.children['fullscreen'] = new FullscreenSlideView({
			el: this.$('[data-bind=fullscreen]'),
			model: new SlideModel()
		});
		
		_base.openFullScreenPresentation = function(model){
			$body.addClass('presentation-fix-body');
			this.children['fullscreen'].$el.show();
			this.children['fullscreen'].model.set(model.toJSON());
			// TODO store vertical position
		}.bind(this);
		
		_base.hideFullScreenPresentation = function(){
			this.children['fullscreen'].$el.hide();
			$body.removeClass('presentation-fix-body');
		}.bind(this);
	}
});

var app = new PresentationApp({
	el: '#app'
});


}());