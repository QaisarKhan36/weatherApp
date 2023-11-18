const search_data = document.querySelector('#search-box')
const API_KEY = "74fa3930e181ba5da7931f3a5cf1ae32"
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin&appid=74fa3930e181ba5da7931f3a5cf1ae32
const API_CALL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function changeData(city){
    const res = await fetch(API_CALL + city + `&appid=${API_KEY}`)
    var data = await res.json()
    document.querySelector("#humidity_speed").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind_speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector("#city_name").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    console.log(search_data)
}
const btnclick = document.querySelector(".search_btn")
btnclick.addEventListener("click", () => {
    changeData(search_data.value)
})
