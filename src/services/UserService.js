
    import axios from 'axios';

    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
    const apiKey = '73e34ea10bd489108a8939768a315b8f';
    
    export const getData = async (cityname) => {
      
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }