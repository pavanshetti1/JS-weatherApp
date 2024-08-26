const apiKey = "5c86150ac77ef60ae9b3775b5b231233";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".search input");
const inputBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



let getData = async (city)=>{
    const response = await fetch(api+city+`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    if(response.status == 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".temp").innerText = Math.round(data.main.temp)+"°c";
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".humidity").innerText = data.main.humidity+"%";
        document.querySelector(".wind").innerText = data.wind.speed+" km/h";
        weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`
        document.querySelector(".error-message").style.display = "none";
        document.querySelector(".weather").style.display = "block"
    }
};



inputBtn.addEventListener("click", ()=>{
    const city = input.value; 
    getData(city);
});