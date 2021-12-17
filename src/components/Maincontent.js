import React, { useEffect, useState } from 'react';
import '../css/StyleMain.css';

export default function Maincontent() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");
    useEffect(()=>{
        const fetchApi =async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=73e34ea10bd489108a8939768a315b8f`
            const response = await fetch(url);
            const resjson=await response.json();
            // console.log(resjson);
            setCity(resjson.main);
        }
        fetchApi();
    },[search])

    return (
        <>
        <div className='frame'>
        <div className='box'>
             <div className='searchbox'>
        <input type="search" 
        placeholder='search city' 
        value={search}
       onChange={(event)=>{
            setSearch(event.target.value);
       }}
        />
            
        </div>
        {!city ?(<p>Data Not Found</p>):(
            <div>
            <div className='info'>
            <h1>{search}</h1>
            {/* <h2>Date.toLocaleString()</h2> */}
            <h2>time</h2>
            <h1 className='temp'>
                 {city.temp}°C
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
