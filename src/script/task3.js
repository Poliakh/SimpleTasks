/**
 * Некая сеть фастфудов предлагает несколько видов гамбургеров:
 
 маленький (50 тугриков, 20 калорий)
 большой (100 тугриков, 40 калорий)
 
 Гамбургер может быть с одним из нескольких видов начинок (обязательно):
 
 сыром (+ 10 тугриков, + 20 калорий)
 салатом (+ 20 тугриков, + 5 калорий)
 картофелем (+ 15 тугриков, + 10 калорий)
 
 * Класс, объекты которого описывают параметры гамбургера. 
*/
class Hamburger{
	constructor(size, stuffing){
		this._size = size;
		this._stuffing = stuffing;
		console.log(this);
		
	}
	_check(){
		if(!this._size){
			return "бургер не добавлен"
		}else if(!this._stuffing){
			return "добавка отсуствует"
		}
		return true;
	}
	get getBurger(){
		return(
			`burger: ${this._size["size"]}/${this._stuffing["stuffing"]}/${this._topping["topping"]}`
		)
	}
	get getSize(){
		return this._size;
	}
	get getStuffing(){
				return this._stuff;
	}
	calculatePrice(){
		let cost = 0;
		for (const key in this) {
			cost+= this[key].cost;
		}
		return cost;
	}
	calculateCalories(){
		let calories = 0;
		for (const key in this) {
			calories+= this[key].cal;
		}
		return calories;
	}
	addTopping(topp){
		console.log(topp.topping);
		
		
	}
	removeTopping(topping){

	}
};

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {"size":"small", "cost":50, "cal":20};
Hamburger.SIZE_LARGE = {"size":"large", "cost":100, "cal":40};
Hamburger.STUFFING_CHEESE = {"stuffing":"cheese", "cost":10, "cal":20};
Hamburger.STUFFING_SALAD = {"stuffing":"salad", "cost":20, "cal":5};
Hamburger.STUFFING_POTATO = {"stuffing":"potato", "cost":15, "cal":10};
Hamburger.TOPPING_MAYO = {"topping":"mayo", "cost":20, "cal":5};
Hamburger.TOPPING_SPICE = {"topping":"spice", "cost":15, "cal":0};


// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log("проверка " + hamburger._check());

	// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// console.log(hamburger.getBurger);

// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
	// А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());
	// Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
	// Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1

// console.log(hamburger.getSize);
// console.log(hamburger.getStuffing);


