import React, { useEffect, useState } from 'react';
import {getData} from '../services/UserService';
import img from '../assets/img2.jpg';
import '../css/StyleMain.css';


export default function Maincontent() {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState(null);
    const[weather,setWeather]=useState(null);
    const result=search.toUpperCase();
    const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    const showDate=new Date();
    const displayFullDate=showDate.getDate() + '-' + months[showDate.getMonth()] + '-'+ showDate.getFullYear();
    const showTime=new Date();
    const displayFullTime=showTime.toLocaleTimeString();
    
    
    useEffect(()=>{
            
const getReport = async () =>
     {
        try {
            const response = await getData(search);
            console.log(response);
            setCity(response);
            setWeather(response);
            return response;
        } catch (error) {
            console.error(error);
            
            setWeather("");
            
        }
    }
    getReport();
},[search])
    return (
        <>
        <div className='frame'>
        <div className='box' 
        style={{
           backgroundImage:`url(${img})`
        }
          
        } 
        >
             <div className='searchbox'>
        <input type="search" 
        placeholder='search city' 
        value={search}
       onChange={(event)=>{
            setSearch(event.target.value);
       }}
        />
          
        </div>
        {!weather?(<p className='default'>Data Not Found</p>):(
            <div>
            <div className='datetime'>
            <div><h2 className='date'>
                   {displayFullDate} 
            </h2></div>
           <div> <h2 className='time'> 
                   {displayFullTime} 
            </h2></div>
            </div>
            <div className='info'>
            <h1 className='city'>{result}</h1>
            <h1 className='temp'>
                Temp: {(city.main.temp-273.15).toFixed(1)}°C
            </h1>
            <h2 className='temp_min_max'>
                Min:{(city.main.temp_min-273.15).toFixed(1)}°C | Max:{(city.main.temp_max-273.15).toFixed(1)}°C
            </h2>
            

            </div>
            </div>
        )
        }
        
       
           
        </div>
        </div>
        </>
    )
}
