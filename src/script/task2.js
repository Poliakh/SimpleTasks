//Task8
console.log("---Task8---");

function pluck(arr,name){
	return arr.map(function(item){
		if (typeof(item)=="object"){
			for (let key in item) {
				if(key == name){
					return item[key];
				}
			}
		}
	});
}
let characters = [ 
	{ 'name': 'barney', 'age': 36 },
	{ 'name': 'fred', 'age': 40 }
	];
  
  console.log(pluck(characters, 'name')); // ['barney', 'fred']
//end Task8

//Task9
console.log("---Task9---");

let input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность

let filter = (arr, fn)=>{
	let newArr = [];
	// for (let i = 0; i < arr.length; i++) {
	//	fn(arr[i])? newArr.push(arr[i]):null;
	// }
	arr.forEach((item)=>{
		fn(item)? newArr.push(item): null;
	});
	return newArr;
};
console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); // [1, 2, 3, 4, 5, 6]

//end Task9

//Task10
console.log("---Task10---");
let count = obj=>{
	let counter = 0;
	for (const key in obj) {
		(obj[key])? counter++:null ;
		
	}
	return counter;
}

let a = { a: 1, b: 2 };
console.log(count(a)); // 2
let b = function () {};
console.log(count(b)); // 0

let c = [1, 2, 3];
console.log(count(c)); // 3

let d = [];
d[100] = 1;
console.log(count(d)); // 1
//end Task10


//Task11
console.log("---Task11---");
let list = [
	{"country":"Китай", "city":"Шанхай","population":22125},
	{"country":"Рес.Корея", "city":"Сеул — Инчхон","population":24315},
	{"country":"Индия", "city":"Дели","population":28125 },
	{"country":"Мексика", "city":"Мехико","population":20395},
	{"country":"Индия", "city":"Мумбаи","population":23645},
	{"country":"США", "city":"Нью-Йорк","population":11875},
	{"country":"Китай", "city":"Гуанчжоу — Фошань","population":20130},
	{"country":"Бразилия", "city":"Сан-Паулу","population":20935},
	{"country":"Филиппины", "city":"Манила","population":25065},
	{"country":"Идонезия", "city":"Джакарта","population":34365}
];

let sort = (list, length = list.length)=>{ //swap items in the list
	let swap = (arr,i)=>{
		if(i>0){
			arr.splice(i-1, 2, arr[(i)], arr[i-1]);
			return arr;
		}else{
			return false;
		}
	}
	let sorting = (sortArr)=>{// sorting all items in the list
		sortArr.reduce((prev,curr, i)=>{
			if(curr.population<prev.population){
				if(swap(sortArr,i)){
					sorting(sortArr);
				}
			}
			return curr;
		});
		return sortArr;
	}

	let getList = (arr, length)=>{//return the right amount items of list
		let sortArr = sorting(arr);
		let resList = sortArr.filter((item, i)=>{
			return (i>=length)? false: item;
		});
		return resList;
	}
	return getList(list,length)
}
console.log(sort(list,4));
console.log(sort(list));

//end Task11