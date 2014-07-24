var FlipSectionModel = Backbone.Model.extend({
	defaults: {
		digit: ' ',
		id: undefined
	}
});

var FlipSectionView = m3toolkit.View.extend({
	className: 'hotdays_flip_flip',
	template: _.template(
		'<div class="hotdays_flip_active">' +
			'<div class="hotdays_flip_up">'+
				'<div class="hotdays_flip_shadow"></div>'+
				'<div class="hotdays_flip_inn">&nbsp;</div>'+
			'</div>'+
			'<div class="hotdays_flip_down">'+
				'<div class="hotdays_flip_shadow"></div>'+
				'<div class="hotdays_flip_inn">&nbsp;</div>'+
			'</div>'+
		'</div><div class="hotdays_flip_before">'+
			'<div class="hotdays_flip_up">'+
				'<div class="hotdays_flip_shadow"></div>'+
				'<div class="hotdays_flip_inn"><%=digit%></div>'+
			'</div>'+
			'<div class="hotdays_flip_down">'+
				'<div class="hotdays_flip_shadow"></div>'+
				'<div class="hotdays_flip_inn"><%=digit%></div>'+
			'</div>'+
		'</div>'
	),
	initialize: function(){
		m3toolkit.View.prototype.initialize.call(this);
		
		this.listenTo(this.model, 'change:digit', function(model){
			if(model.changed.digit != undefined){
				this._flip(model.changed.digit);
			}
		});
	},
	_flip: function(symbol){
		var     $digit5 = this.$el;
		
		$digit5.children(".hotdays_flip_before").find(".hotdays_flip_inn").text(symbol);
		if(!$digit5.length)
			return;

		$digit5.removeClass("hotdays_flip_play-start");
		var 	aa = $digit5.children(".hotdays_flip_active");
		
		if(aa.html() == undefined){
			aa = $digit5.children().first();
			aa.addClass("hotdays_flip_before")
				.removeClass("hotdays_flip_active")
				.next()
				.addClass("hotdays_flip_active");
			$digit5.addClass("hotdays_flip_play-start");
		}else if(aa.is(":last-child")) {
			$digit5.children().removeClass("hotdays_flip_before");
			aa.addClass("hotdays_flip_before").removeClass("hotdays_flip_active");
			aa = $digit5.children().first();
			aa.addClass("hotdays_flip_active");
			$digit5.addClass("hotdays_flip_play-start");
		}else{
			$digit5.children().removeClass("hotdays_flip_before");
			aa.addClass("hotdays_flip_before")
				.removeClass("hotdays_flip_active")
				.next()
				.addClass("hotdays_flip_active");
			$digit5.addClass("hotdays_flip_play-start");
		}
	}
});
var FlipCounterCollection = Backbone.Collection.extend({
	model: FlipSectionModel
});

var FlipCollectionView = m3toolkit.CollectionView.extend({
	initialize: function(conf, view){
		m3toolkit.CollectionView.prototype.initialize.call(this, conf, view);
		this.MAX_DIGIT_C = this.collection.models.length;
	},
	rotate: function(val){
		var 	next = this.formatNumber(val + '');

		for(var i = this.MAX_DIGIT_C - 1; i >= 0; i--){
			this.collection.models[i].set('digit', next[i]);
		}
	},
	formatNumber: function(next){
		var     nextLen = next.length;

		if(nextLen > this.MAX_DIGIT_C){
			next = next.substring(nextLen - this.MAX_DIGIT_C); // Обрезаем строку если выходит за необходимое кол-во
		}else{
			for(var i = 0, len = this.MAX_DIGIT_C - nextLen; i < len; i++){
				next = " " + next;
			}
		}
		return next;
	}
});

// Create controls
var createFlipCounter = function($el){
	return new FlipCollectionView({
		collection: new FlipCounterCollection([
			{id: 0},
			{id: 1},
			{id: 2},
			{id: 3},
			{id: 4},
			{id: 5}]),
		el: $el
	}, FlipSectionView);
};

var createCounterControl = function($btn, view){
	var _n = 0;
	$btn.on('click', function(){
		view.rotate(_n);
		_n++;
	});
};

createCounterControl($('#control-increment'), createFlipCounter($('#control-flip-counter')));
createCounterControl($('#control-increment2'), createFlipCounter($('#control-flip-counter2')));
