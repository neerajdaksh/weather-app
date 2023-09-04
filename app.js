//select elements

const cityTextName = document.querySelector("#city-text");
const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#city-name");



const getWeatherData =async()=>{

    try{
        // const city = cityTextName.value; 
        const city ='rishikesh'; 
              
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10415d2f2936a35db773d8c1d2a98c33&units=metric`);
        const data = await res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }


}

searchBtn.addEventListener("click",getWeatherData);
getWeatherData();