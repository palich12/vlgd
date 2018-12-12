var arr = [1, 2, 3, 4, 5]
console.log(arr);

console.log(arr + "");

arr += [6]
console.log(arr);

var f = function sayHi(name) {
    alert( sayHi ); // изнутри функции - видно (выведет код функции)
  };
  
alert( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')