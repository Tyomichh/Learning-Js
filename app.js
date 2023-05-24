// -----------------------------------------------------------------------Variables and Data Types------------------------------------------------------------------------------------------------------

// Завдання:
// Напишіть програму, яка перевіряє, чи є змінна числом, та виводить "це число", якщо так, або "це не число", якщо ні. Використовуйте оператор typeof та умовний оператор.
// Відповідь:
// let variable = 2;
// if (typeof variable === "number") {
//     console.log("це число");
// }
// else {
//     console.log("це не число");
// }


// Завдання:
// Напишіть програму, яка перевіряє, чи є змінна числом, та виводить "це число", якщо так, або "це не число", якщо ні. Використовуйте оператор typeof та умовний оператор.
// Відповідь:
// let variable = 2;
// if (typeof (variable) === "number") {
//     console.log("це число");
// }
// else {
//     console.log("це не число");
// }


// Завдання:
// (Напишіть програму, яка перевіряє, чи є змінна числом, та виводить "це число", якщо так, або "це не число", якщо ні. Використовуйте оператор typeof та умовний оператор.)
// Відповідь:
// let variable = 2;
// if (typeof variable === "number") {
//     console.log("це число");
// } else {
//     console.log("це не число");
// }


// Завдання:
// (Напишіть функцію, яка приймає рядок та повертає кількість букв у ньому. Використовуйте цикл for та змінну-лічильник.)
// Відповідь:
// let variable = "lil bro";
// function printArrayElements(elm) {
//     for ( var i = 0;i < elm.length; i++ ) {
//     }
//     console.log(i);
// }
// printArrayElements(variable)


// Завдання:
// (Напишіть програму, яка створює масив з п'яти різних значень та виводить його у консоль. Використовуйте літерал масиву.)
// Відповідь:
// let variable = [1, 2, 3, 4, 5];
// console.log(variable);


// Завдання:
// (Напишіть функцію, яка приймає масив чисел та повертає їх суму. Використовуйте цикл for та змінну-лічильник.)
// Відповідь:
// let variable = [1,5,2,3,4,5,-6,5,53,-5,45,-35];
// function sumOfArray(elm) {
//     let counter = 0; 
//     for ( var i = 0;i < elm.length; i++ ) {
// 			counter = 0 + elm[i];
//     }
//     console.log(counter);
// }
// sumOfArray(variable)


// Завдання:
// (Напишіть програму, яка створює об'єкт з трьома властивостями: name, age, city. Значення можуть бути будь-якими рядками. Виведіть об'єкт у консоль.)
// Відповідь:
// let variable = {
// name: "Josh",
// age: 21,
// city: "NewYork"
// };
// console.log(variable);


// Завдання:
// (Напишіть функцію, яка приймає об'єкт та виводить всі його властивості та їх значення в консоль. Використовуйте цикл for...in.)
// Відповідь:
// let variable = {
// name: "Josh",
// age: 21,
// city: "NewYork"
// };
// function objOut(elm) {   
//     for (let prop in elm){
// 			console.log(prop + ": " + elm[prop]);
//     }
// }
// objOut(variable)


// Завдання:
// (Напишіть програму, яка створює мапу з трьома ключами-значеннями: name - ваше ім'я, age - ваш вік, city - ваше місто. Виведіть мапу у консоль.)
// Відповідь:
// let variable = new Map();
// variable.set("name" , "Johs");
// variable.set("age" , 21);
// variable.set("city" , "New York");
// console.log("My name is " + variable.get("name") + " i`m " + variable.get("age") + " years old, and i live in " + variable.get("city"));


// Завдання:
// (Напишіть функцію, яка приймає мапу та виводить всі її ключі та значення в консоль. Використовуйте метод forEach.)
// Відповідь:
// let variable = new Map();
// variable.set("name" , "Johs");
// variable.set("age" , 21);
// variable.set("city" , "New York");
// function objOut(elm) {
//     elm.forEach(function(value, key) {
//     	console.log(key + " = " + value);
//     });
// }
// objOut(variable)


// Завдання:
// (Напишіть програму, яка приймає число та перевіряє, чи є воно парним. Виведіть "це парне число", якщо так, або "це непарне число", якщо ні. Використовуйте оператор % та умовний оператор.)
// Відповідь:
// let variable = +prompt();
// console.log((variable % 2 === 0) ? "це парне число" : "це непарне число");








// -----------------------------------------------------------------------Control Flow and Loops------------------------------------------------------------------------------------------------------










// Напишіть цикл for, який виведе на консоль всі парні числа від 0 до 10.
// vsechisla: for(let i = 0;i < 11; i++){
// 	if (i%2===0){
//   	console.log(i);
//   }
// }


// Створіть змінну counter і призначте їй значення 5. Використовуючи цикл while, зменшуйте значення counter на 1 на кожній ітерації циклу, доки counter не стане рівним 0. Виведіть значення counter на кожній ітерації.
// let counter = 5;
// while(counter !== 0){
// counter--;
// console.log(counter);
// }


//Запросіть у користувача число з діапазону від 1 до 10. Використовуючи цикл do-while, перевіряйте, чи введене число є дійсним числом з діапазону. Продовжуйте запитувати число, поки користувач не введе дійсне число з діапазону.
// let vvod;
// do {
// 	vvod = +prompt("Введіть значення від 0 до 10: ");
// } while (vvod < 1 || vvod > 10);
// console.log(vvod);


// Створіть цикл for для перебору чисел від 1 до 5. Усередині циклу for використовуйте цикл while для виведення чисел від 1 до поточного значення зовнішнього циклу.
// for (let i = 1; i <= 5; i++) {
//     let j = 1;
//     while (j <= i) {
//       console.log(j);
//       j++;
//     }
//   }


// Створіть цикл for для перебору чисел від 1 до 3. Усередині циклу for створіть ще один цикл for, щоб вивести числа від 1 до 2. Виведіть результат у форматі "Зовнішній_цикл_змінна - Внутрішній_цикл_змінна".
// for (let i = 1; i <= 3; i++) {
// 	console.log(i);
//     for (let j = 1; j <= 2; j++) {
//     	console.log(j);
//     }
// }




// ----Асинхронний JavaScript (Promises, async/await, Callback)----





// Завдання:
// a) Напишіть функцію, яка повертає Promise і вирішується через 3 секунди з певним значенням.
// Рішення:
// function retPromise(){
// const coffeProm = new Promise((resolve, reject) => {
// 	setTimeout(() => {
//   resolve('Кофе готов!')
// },3000)
// });
// coffeProm.then(data=> {
// 	console.log(data);
// }) 
// }
// retPromise()


// // Завдання:
// b) Напишіть функцію, яка використовує setTimeout та Promise для створення затримки в 2 секунди, а потім вирішується зі значенням "Готово!".
// Рішення:
// function retPromise(){
// return new Promise((resolve, reject) => {
// 	setTimeout(() => {
//   resolve('Готово!')
// },2000)
// });
// }
// retPromise().then(data=> {
// 	console.log(data);
// }) 


// Завдання:
// c) Напишіть функцію, яка приймає callback-функцію та викликає її з певним значенням через 1 секунду.
// Рішення:
// function retPromise(callback){
//     setTimeout(() => {
//     	callback('Hello!')
//   	},1000)
// }
// function callbackFunc(data) {
//   console.log('Callback function is called!');
//   console.log('Data: ', data);
// }
// retPromise(callbackFunc)


// Завдання:
// a) Напишіть функцію, яка використовує Promise.all для одночасного виконання кількох асинхронних запитів та повертає масив результатів.
// Рішення:
// const foo = [
//     {
//     name:'Jim',
//     favoritGame: 'football'
//     },    
//     {
//     name:'Ron',
//     favoritGame: 'baseball'
//     },  
//     {
//     name:'JDin',
//     favoritGame: 'playstation'
//     }];    
//     const whosPlaing = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const boys = foo.map(res => res.name);
//           resolve (boys);
//           },2000)
//     })
//     }    
//     const whatPlaing = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const games = foo.map(res => res.favoritGame);
//           resolve (games);
//           },4000)
//     })
//     }    
//     const boysPromise = whosPlaing();
//     const gamesPromise = whatPlaing();    
//     Promise.all([boysPromise,gamesPromise]).then(([boysPromise,gamesPromise]) => {
//     console.log(boysPromise,gamesPromise);
//     })
    

// Завдання:
// b) Напишіть функцію, яка отримує дані з віддаленого сервера за допомогою fetch та повертає Promise з результатом.
// Рішення:
// function whosPlaing() {    
//     const playstation = fetch('https://api.sampleapis.com/playstation/games');   
//     return playstation;
// }
// whosPlaing()
// .then(data => data.json())
// .then(games => {
// console.log(games)})
// .catch(error => {
// console.log(error);
// });

// Завдання:
// c) Напишіть функцію, яка використовує async/await для послідовного виконання декількох асинхронних операцій та повертає результат останньої операції.
// Рішення:
// async function whosPlaing() {    
//     const playstation = await fetch('https://api.sampleapis.com/playstation/games');
//     const pdata = await playstation.json()
//     const game = await fetch('https://api.sampleapis.com/baseball/hitsSingleSeason');
//     const gdata = await game.json()
//     console.log(pdata);
//     console.log(gdata);
// }
// whosPlaing()


// Завдання:
// a) Напишіть функцію, яка отримує список URL-адрес зображень, завантажує їх асинхронно за допомогою Promise.all, та повертає масив завантажених зображень.
// Рішення:
// const urlList = [
//   {
//     name: 'colorBum',
//     URL: 'https://i.pinimg.com/originals/b8/b7/48/b8b748e00bcfdeed1a903fc3f1cc426d.jpg'
//   },
//   {
//     name: 'Space',
//     URL: 'https://wallpapers-fenix.eu/full/190722/235251765.jpg'
//   },
//   {
//     name: 'Moon',
//     URL: 'https://ukr.media/static/ba/aimg/4/1/4/414281_1.jpg'
//   },
//   {
//     name: 'Jupiter',
//     URL: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pia2380-16x9.jpg'
//   }
// ];
// function downloadImages(urls) {
//   const createPromises = urls.map(url => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () => resolve({ name: url.name, image: img });
//       img.onerror = () => reject(new Error(`Не вдалося завантажити зображення: ${url.name}`));
//       img.src = url.URL;
//     });
//   });
//   return Promise.all(createPromises);
// }
// downloadImages(urlList)
//   .then(images => {
//     console.log('Зображення завантажено:', images);
//   })
//   .catch(error => {
//     console.error('Помилка завантаження зображень:', error);
//   });