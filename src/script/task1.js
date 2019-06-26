// Task1
console.log("---Task1---");

function sequence(start = 0, step = 1){
	let flag = true;
	
	return function gen(){
		if(flag){
			flag = !flag;
			return start;
		}else{
			return start += step;
		}
	}
}
let generator = sequence(10, 3);
let generator2 = sequence(7, 1);
console.log(generator);

console.log(`gen: ${generator()}`); // 10
console.log(`gen: ${generator()}`); // 13

console.log(`gen2: ${generator2()}`); // 7

console.log(`gen2: ${generator()}`); // 16

console.log(`gen2: ${generator2()}`); // 8
// end task1

//Task2
console.log("---Task2---");
function take(gen, count){
	let arr = [];
	for (let i = 0; i < count; i++) {
		arr.push(gen())
	}
	return arr;
}


var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
//end Task2


//Task3
console.log("---Task3---");
function map(fun, arr){
	return arr.map(function(num){
		return fun(num);
	})

}



function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
console.log("---3.1---");

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

console.log("---Task4---");
function fmap(a, gen){
	return function(){
		return a(gen())
	}
};
var gen = sequence(1, 1);
// function square(x) { return x * x; }
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16


console.log("---Task4.2---");
// вернуться к этой задаче
// function add(a, b) { 
// 	return a + b; 
// }

// var squareAdd = fmap(square, add);
// console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
// console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2

