//import React, {Component, useState} from "react";
//import CityInput from "./components/CityInput";
//import CityWheather from "./components/CityWheather";
import '../styles/App.css';
import React from "react";
import CityInput from "./CityInput";
import CityWheather from "./CityWheather";

const App = () => {
  const [city,setCity] = React.useState("");
  const [cityWheather,setCityWheather] = React.useState({})
  const fetchCityWheather = () =>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    ).then((response)=>response.json()).then((result)=>{
      setCityWheather(result);
      //return (result.main.temp);
    });
  };

  
  
  
 return(
  <>
   <CityInput city={city} setCity={setCity} fetchCityWheather = {fetchCityWheather} cityWheather = {cityWheather}/>
   
   {/* <CityWheather city={city} cityWheather = {cityWheather}/>  */}
  

   
  </>
 );
}


export default App;
