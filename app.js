//select elements

const cityTextName = document.querySelector("#city-text");
const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#city-name"); 
const countryName = document.querySelector("#country");
const cityTemp = document.querySelector("#temp");
const  tempDiscription = document.querySelector("#discription");


let city = "dehradun";

const getWeatherData =async()=>{

    try{
                        
       let  city = cityTextName.value; 
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10415d2f2936a35db773d8c1d2a98c33&units=metric`);
        const data = await res.json();
        
            cityName.innerHTML = data.name;   
            countryName.innerHTML = data.sys.country;
            cityTemp.innerHTML = data.main.temp;
            tempDiscription.innerHTML = data.weather[0].description;
         
           
            
          console.log(data); 
     
    }catch(error){
        console.log(error);
    }

 
}

searchBtn.addEventListener("click",getWeatherData);
 