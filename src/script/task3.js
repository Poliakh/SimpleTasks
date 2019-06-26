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
		// this.burger = {};
		
		this._size = size;
		this._stuff = stuffing;
	}
	createBurger(){
		
		console.log("burger");
		
	};
	_check(){
		if(!this._size){
			return "бургер не добавлен"
		}else if(this._stuff){
			return "добавка отсуствует"
		}
	}
	get getBurger(){
		return(
			`size burger - ${this._size["size"]}, stuffing - ${this._stuff["stuffing"]}, topping - ${this._topping["topping"]}`
		)
	}
	get getSize(){
		return this._size;
	}
	get getStuffing(){
		return this._stuff;

	}
	calculatePrice(){

	}
	calculateCalories(){

	}
	addTopping(topping){
		this._topping = topping;
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

	// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
	// спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());
	// сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
	// я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
	// А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());
	// Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
	// Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1

// console.log(hamburger.getSize);
// console.log(hamburger.getStuffing);
console.log(hamburger.getBurger);


