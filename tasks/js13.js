// Задание 2

// По данному url расположена задача:

// https://jsonplaceholder.typicode.com/todos/1

// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.

// let div = document.querySelector('div');
// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//     let obj = JSON.parse(httpRequest.responseText);
//     div.append(obj.title)
// };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();



// Задание 3
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.


// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//     let obj = JSON.parse(httpRequest.responseText);
//     for(let i = 0; i < 20; i++){
//         li = obj[i];
//         ul.append(li.title);
//     }
//     console.log(httpRequest.responseText);
// };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// httpRequest.send();


// Задание 4
// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments
// Оформить тегами как в ПРИМЕРЕ.

// Порядок работы:
// 1) записать в переменную блок для отрисовки результата.
// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
// 4) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
// 5) прописать CSS для классов.


// let div = document.querySelector('div');

// function addInfo(teg,content,name){
//     let tag = document.createElement(teg);
//     tag.innerText = content;
//     tag.classList.add(name);
//     div.append(tag);
// }
// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 
//     let obj = JSON.parse(httpRequest.responseText);
//     console.log(httpRequest.responseText);
//     for(let i = 0; i < 10; i++){
//         addInfo(`h3`,obj[i].name,`name`)
//         addInfo(`p`,obj[i].email,`email`)
//         addInfo(`p`,obj[i].body,`body`)
//     }
    
// };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send();


