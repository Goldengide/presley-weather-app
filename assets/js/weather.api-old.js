let cityData = {
    'city': "Ile-Ife",
    'appId': '247e7341e846c35a976a868d00ad47ec'
}

let cordinateData = {
    'lat': 6.5244,
    'long': 3.3792,
    'time': '1586468027',
    'appId': '247e7341e846c35a976a868d00ad47ec'
}
async function fetchWeatherAppApibyCoordinate(data) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.long}&dt=${data.time}&appid=${data.appId}`);
    let result = await response.json()
    return result;
}
async function fetchWeatherAppApiByCity(data) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.appId}`);
    let result = await response.json()
    return result;
}
/* fetchWeatherAppApibyCoordinate(cordinateData).then(data => {
    console.log(data);
    let insertPoint;
    insertPoint = document.getElementById('weather')
    insertPoint.innerHTML = JSON.stringify(data.current.temp);
}); */
fetchWeatherAppApiByCity(cityData).then(data => {
    console.log(data);
    let insertPoint;
    insertPoint = document.getElementById('weather')
    insertPoint.innerHTML = JSON.stringify(data.current.temp);
});