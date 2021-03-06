﻿m3-backbone-toolkit
===================

Toolkit for Backbone apps

### Что такое
Набор представлений "полуфабрикатов" для быстрого прототипирования приложений с использованием библиотеки Backbone. Каждое представление создано с целью решить определенный круг задач. 

### Демо
- [презентация-портфолио](http://matraska23.github.io/m3-backbone-toolkit/demo_presentation/index.html)
- [флип счетчик](http://matraska23.github.io/m3-backbone-toolkit/demo_flip-clock/index.html)
- [дата биндинг](http://matraska23.github.io/m3-backbone-toolkit/demo_binding/m3toolkit.html)
- [пример работы со списком](http://matraska23.github.io/m3-backbone-toolkit/demo_list/app.html)


### m3toolkit.View
Конструктор несложного представления, использующего шаблонизатор underscore. Имеет возможность работать со встроенными дочерними представлениями.

> var View = m3toolkit.View.extend({});

### m3toolkit.CollectionView 
Представление (в просторечье вьюшка) для отображение Backbone коллекции с заданным представлением для дочерних элементов.

```
var FlipCollectionView = m3toolkit.CollectionView.extend({...});
var flipCollectionView = new FlipCollectionView({
    collection: new FlipCounterCollection([...]),
		el: $el
   }, FlipSectionView)
```

### m3toolkit.BlockView
Для рендеринга сложных представлений с привязкой DOM элементов с атрибутами модели и объектным отражением DOM элементов.

В представлении можно обратиться к любому DOM элементу для которого был задан атрибут data-co по указанному значению в объекте this.controls.
Все значения атрибутов содержащих дефис ("-") изменяются по следующей схеме. Так "city-input" будет this.controls.cityInput.

` <span class="">Город</span><input data-co="city-input"/>`

Простым языком. Добавьте в шаблоне к элементу атрибут data-co и вы найдете его в объекте this.controls по указанному вами значению. 
Почему data-co? Это коротко, не пересекается с другими библиотеками. И от data-controls.

#### Вычисляемые значения
Через метод представления _addComputed можно привязать DOM элемент с атрибутами модели.

```
this._addComputed('computedFio', ['name', 'sername'], function(control, model){
	var 	sername = model.get('sername'),
			name = model.get('name');
	control.text('Абонент: ' + sername + ' ' + name);
	control.removeClass('warning');
})
```
Здесь содержимое элемента `<div data-co="computed-fio"></div>` будет зависить от атрибутов name и sername модели. Имена атрибутов модели переданы в массиве, если атрибут только один, то можно передать строковой константой.



#### Преобразование значения
Чтобы связать значения одноименных атрибутов модели и DOM-элементы доступна механика преобразования, которая может быть определена через метод _addTransform.
```
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
```
