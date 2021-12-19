import React, { useEffect, useState } from 'react';
import img from '../assets/img1.jpg';
import '../css/StyleMain.css';


export default function Maincontent() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");
    const result=search.toUpperCase();
    const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    const showDate=new Date();
    const displayFullDate=showDate.getDate() + '-' + months[showDate.getMonth()] + '-'+ showDate.getFullYear();
    const showTime=new Date();
    const displayFullTime=showTime.toLocaleTimeString();

       
    
    useEffect(()=>{
        const fetchApi =async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=73e34ea10bd489108a8939768a315b8f`
            const response = await fetch(url);
            const wait=await response.json();
            // console.log(resjson);
            setCity(wait.main);
        }
        fetchApi();
    },[search])
   
    return (
        <>
        <div className='frame'>
        <div className='box' style={{
           backgroundImage:`url(${img})`
        }
          
        } >
             <div className='searchbox'>
        <input type="search" 
        placeholder='search city' 
        value={search}
       onChange={(event)=>{
            setSearch(event.target.value);
       }}
        />
            
        </div>
        {!city ?(<p className='default'>Data Not Found</p>):(
            <div>
            <div className='info'>
            <h1 className='city'>{result}</h1>
            <div className='datetime'>
            <div><h2 className='date'>
                   {displayFullDate} 
            </h2></div>
           <div> <h2 className='time'> 
                   {displayFullTime} 
            </h2></div>
            </div>
            <h1 className='temp'>
                Temp: {city.temp}°C
            </h1>
            <h2 className='temp_min_max'>
                Min:{city.temp_min}°C | Max:{city.temp_max}°C
            </h2>
            

            </div>
            </div>
        )}
        
       
           
        </div>
        </div>
        </>
    )
}
