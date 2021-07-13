const API_KEY = '9ad87bd97cf062943c727a11f4096436'



function weatherFiveDay(){
fetch('https://api.openweathermap.org/data/2.5/forecast?id=625073&appid=9ad87bd97cf062943c727a11f4096436')
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data)
    document.getElementById('dayWeatherCurrentDay').innerHTML = data.list[0].dt_txt;
    document.querySelector('.city').innerHTML = data.city.name;
    document.querySelector('.current-weather').innerHTML = `${Math.round(data.list[0].main.temp - 273)} &deg`;
    document.querySelector('.desc-weather').innerHTML = data.list[0].weather[0]['description'];

    document.getElementById('dayWeatherSecondDay').innerHTML = data.list[2].dt_txt;
    document.querySelector('.city-second').innerHTML = data.city.name;
    document.querySelector('.current-weather-second-day').innerHTML = `${Math.round(data.list[2].main.temp - 273)} &deg`;
    document.querySelector('.desc-weather-second-day').innerHTML = data.list[2].weather[0]['description'];

    document.getElementById('dayWeatherThirdtDay').innerHTML = data.list[9].dt_txt;
    document.querySelector('.city-third').innerHTML = data.city.name;
    document.querySelector('.current-weather-third-day').innerHTML = `${Math.round(data.list[9].main.temp - 273)} &deg`;
    document.querySelector('.desc-weather-third-day').innerHTML = data.list[9].weather[0]['description'];

    document.getElementById('dayWeatherFourthDay').innerHTML = data.list[17].dt_txt;
    document.querySelector('.city-fourth').innerHTML = data.city.name;
    document.querySelector('.current-weather-fourth-day').innerHTML = `${Math.round(data.list[17].main.temp - 273)} &deg`;
    document.querySelector('.desc-weather-fourth-day').innerHTML = data.list[17].weather[0]['description'];

    document.getElementById('dayWeatherFifthDay').innerHTML = data.list[25].dt_txt;
    document.querySelector('.city-fifth').innerHTML = data.city.name;
    document.querySelector('.current-weather-fifth-day').innerHTML = `${Math.round(data.list[25].main.temp - 273)} &deg`;
    document.querySelector('.desc-weather-fifth-day').innerHTML = data.list[25].weather[0]['description'];
})
.catch(function(){
//error
})
}

weatherFiveDay()
