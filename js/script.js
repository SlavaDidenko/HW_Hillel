const request = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

async function infoReqest(request) {
  const response = await fetch(request);
  const getInfo = await response.json();
  return getInfo;
} 

async function getInfo() {
  try {
    const resultReq = await infoReqest(request);
    let now = new Date();
    let { name, main: { temp, pressure, humidity, feels_like }, weather: [{ description, icon }], wind: { speed, deg } } = resultReq;
    const month = now.toLocaleString('eng', { month: 'short' });
    const date = now.getDate();
    const year = now.getFullYear();
    const weekday = now.toLocaleString('eng', { weekday: 'short' })
    document.querySelector('.weather').innerHTML = `
    <div class="weather__wrapper">
                <h1 class="weather__city">${name}</h1>
                <div class="date">${month} ${date}, ${year} - ${weekday}</div>
                <div class="time">${now.toLocaleString('eng', { timeStyle: 'short' })}</div>
                <p class="weather__humidity">Humidity: ${humidity}%</p>
                <p class="weather__pressure">Pressure: ${pressure} hPA</p>
                <p class="weather__speed">Wind: ${Math.round(speed)} km/h</p>
                <p class="weather__direction">Direction: ${deg}°</p>
            </div>
            <div class="weather__wrapper">
                <img height="100" width="100" class="weather__img" src="http://openweathermap.org/img/w/${icon}.png" alt="weather">
                <p class="weather__temp">${Math.round(temp)}°C</p>
                <p class="weather__feels-like">Feels Like: ${Math.round(feels_like)} °C</p>
                <p class="weather__description">${description.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})}</p>
            </div>`
  } catch (error) {
    document.querySelector('.weather').innerHTML = `Try later!`;
    console.log(error)
  }
}

getInfo();

setInterval(() => { // не знаю на скільки це правильно, але в нас же всі дані динамічні
  getInfo();
}, 5000);
