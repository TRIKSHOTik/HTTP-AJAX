const widget = document.querySelector('.widget');
const current = document.querySelector('.current');
const forecast = document.querySelector('.forecast');
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();


function renderMain(town, time, img, event, temp, speed) {
    let div = document.createElement('div');
    let data = document.createElement('div');
    let span = document.createElement('span');
    let windSpeed = document.createElement('div');
    span.innerText = 'Speed';
    let weather = document.createElement('div');
    data.classList.add('date');
    weather.classList.add('wheather');
    windSpeed.classList.add('speed');
    let divTown = document.createElement('div');
    let divEvent = document.createElement('div');
    let divTime = document.createElement('div');
    let divTemp = document.createElement('div');
    let image = document.createElement('img');
    let divSpeed = document.createElement('div');
    image.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
    divTown.innerText = town;
    divEvent.innerText = event;
    divSpeed.innerText = `${speed}m/s`;
    divTemp.innerText = `${temp.toFixed()}°C`;
    divTime.innerText = time;
    windSpeed.append(span);
    windSpeed.append(divSpeed)
    weather.append(image);
    weather.append(event);
    weather.append(divTemp);
    data.append(divTown);
    data.append(divTime);
    div.append(data);
    div.append(weather);
    div.append(windSpeed);
    current.append(div);
}

function renderRow(time, date, img, temp) {
    let div = document.createElement('div');
    let divNow = document.createElement('div');
    div.classList.add('row');
    let divTime = document.createElement('div');
    let divDate = document.createElement('div');
    let divImg = document.createElement('div');
    let divTemp = document.createElement('div');
    let image = document.createElement('img');
    divDate.innerText = date;
    divTime.innerText = time;
    image.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
    image.classList.add('logo')
    divImg.append(image);
    divTemp.innerText = `${temp.toFixed()}°C`;
    divNow.append(divTime);
    divNow.append(divDate);
    div.append(divNow);
    div.append(divImg);
    div.append(divTemp);
    forecast.append(div);
}


let httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
    let obj = JSON.parse(httpRequest.responseText);
    let dt = document.createElement('p');
    let dt_t = document.createElement('p');
    for (let i = 0; i < 40; i += 8) {
        dt = obj.list[i].dt_txt.slice(0,obj.list[i].dt_txt.indexOf(" "));
        dt_t = obj.list[i].dt_txt.slice(obj.list[i].dt_txt.indexOf(" "));
        renderRow(dt, dt_t, obj.list[i].weather[0].icon, obj.list[i].main.temp);
    }
    for (let i = 0; i < 8; i+=8) {
        renderMain(obj.city.name,`${hour}:${min}`,obj.list[i].weather[0].icon,obj.list[i].weather[0].main,obj.list[i].main.temp, obj.list[i].wind.speed);
    }

};
httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Brest&appid=a94d0a5ac08570add4b47b8da933f247&units=metric');
httpRequest.send();
