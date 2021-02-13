//import React, {Component, useState} from "react";
//import CityInput from "./components/CityInput";
//import CityWheather from "./components/CityWheather";
import '../styles/App.css';
import React from "react";
import CityInput from "./CityInput";
import CityWheather from "./CityWheather";

const App = () => {
  const [city,setCity] = React.useState("");
  const [flag,setFlag] = React.useState(false);
 //const [displayweather,setdisplayweather] = React.useState("");
  const [description,setDescription] = React.useState("");
  const [temp,setTemp] = React.useState("");
  const [humidity,setHumidity] = React.useState("");
  const [temp_min,setTemp_min] = React.useState("");
  const [temp_max,setTemp_max] = React.useState("");
  const [windspeed,setWindspeed] = React.useState("");
  const [name,setName] = React.useState("");
  const fetchCityWheather = () =>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    ).then((response)=>response.json()).then((result) =>{
      
      setDescription(result.weather[0].description)
      setTemp(result.main.temp)
      setHumidity(result.main.humidity)
      setTemp_min(result.main.temp_min)
      setTemp_max(result.main.temp_max)
      setWindspeed(result.wind.speed)
      setName(result.name); 
    
    }
      
      )
   
  };

  // .then((result)=>{
  //   setCityWheather(result);
  //    //return (result.main.temp);
  //   //setCityWheather(result.main.temp);
  //    //console.log(result.main.temp);
  //      console.log(cityWheather.main);
  //  }
   //console.log(cityWheather);
  
  
 return(
  <>
   <CityInput city={city} setCity={setCity} fetchCityWheather = {fetchCityWheather} setFlag = {setFlag}/>
   
   <CityWheather flag = {flag}  windspeed = {windspeed}  name = {name} humidity = {humidity} description ={description} temp ={temp} temp_max = {temp_max} temp_min = {temp_min} /> 
  

   
  </>
 );
}


export default App;



  // {
    //     <p"Result is result",result.main.temp);
    //     console.log("Result is result",result.weather[0].description);
        
    //     console.log("Result is result",result.main.humidity);
    //     console.log("Result is result",result.main.temp_min);
    //     console.log("Result is result",result.main.temp_max);
    //     console.log("Result is result",result.wind.speed);
    //     console.log("Result is result",result.name);
        
    //     }