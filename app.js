let temprature = document.querySelector("#temperature")
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let rainChance = document.querySelector("#rain");
let cloud = document.querySelector("#cloud");
let snowChance = document.querySelector("#snow")
// async function getWeather(event){
//     event.preventDefault();
//     let input = document.querySelector("#userInput");
//     let inputValue = input.value;
//     let result = await axios(`http://api.weatherapi.com/v1/current.json?key=c473265e83ea41a6bd095013261509&q=${inputValue}`)

//     temprature.innerHTML ="Temperature:  "  + result.data.current.
// temp_c;
// humidity.innerHTML = "Humidity:  "  + result.data.current.humidity;
// windSpeed.innerHTML = "WindSpeed:  "  + result.data.current.
// wind_kph;
// rainChance.innerHTML = "rainChance:  "  + result.data.current.
// will_it_rain;
// cloud.innerHTML = "Cloud:  "  + result.data.current.
// cloud;
// snowChance.innerHTML = "Snow:  "  + result.data.current.will_it_snow;



//     console.log(result)
// }

async function getWeather(event){
    event.preventDefault();

let input = document.querySelector("#userInput");
let inputValue = input.value;

let result = await fetch(`http://api.weatherapi.com/v1/current.json?key=c473265e83ea41a6bd095013261509&q=${inputValue}&aqi=yes
`)
let convertData = await result.json();

temprature.innerHTML ="Temperature:  "  + convertData.current.temp_c + "°C|°F";
humidity.innerHTML = "Humidity:  "  + convertData.current.humidity + "%";
windSpeed.innerHTML = "WindSpeed:  "  + convertData.current.wind_kph + " km/h";
rainChance.innerHTML = "RainChance:  "  + convertData.current.will_it_rain;
cloud.innerHTML = "Cloud:  "  + convertData.current.cloud;
snowChance.innerHTML = "Snow:  "  + convertData.current.will_it_snow;

console.log(convertData)
}
