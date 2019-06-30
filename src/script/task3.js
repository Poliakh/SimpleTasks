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
		this.burger = [];
		this.burger.push(size, stuffing)
		this._size = size;
		this._stuffing = stuffing;
		// console.log("myBurger: ");
		// console.log(this.burger);
	}
	_check(){
		// if(!this._size){
		// 	return "бургер не добавлен"
		// }else if(!this._stuffing){
		// 	return "начинка отсуствует"
		// }
		// return true;
	}
	get getBurger(){
		return this.burger;
	}
	getSize(){
		for (const item of this.burger) {
			if(item.size){
				return item;
			}
		}
	}
	get getStuffing(){
		for (const item of this.burger) {
			if(item.stuffing){
				return item;
			}
		}
	}
	getToppings(){
		return this.burger.filter(item=>{
			return (!!item.topping)
		});
	}
	_calculate(val){
		return this.burger.reduce((prev,curr)=>{
			return prev + curr[val];
		},0);
	}
	calculatePrice(){
		return this._calculate("cost");
	}
	calculateCalories(){
		return this._calculate("cal");
	}
	addTopping(topp){
		let noItem = this.burger.some((item)=>{
			if(item.topping == topp.topping){
				alert("Нельзя добавить добавку второй раз");
				return true
			};
		})
		if (!noItem) {
			this.burger.push(topp);
		}
	}
	removeTopping(topp){
		this.burger.some(item=>{
			if(item.topping == topp.topping){
				delete item.topping;
			}
		})
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
// console.log("проверка " + hamburger._check());

// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// // сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);//выведет ошибку
hamburger.addTopping(Hamburger.TOPPING_SPICE);
	// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
console.log("Calories with sauce: %f", hamburger.calculatePrice());
	// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
console.log("Is hamburger small: %s", hamburger.getSize() === Hamburger.SIZE_SMALL); // -> false
	// Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1

console.info("getSize: ", hamburger.getSize());
// console.log();
console.info("getStuff: ", hamburger.getStuffing);
console.info("getTopping: ", hamburger.getToppings());
console.info(`MyBurger:`, hamburger.getBurger);

