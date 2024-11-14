import React, { useEffect, useState } from "react";
export const Index = () => {
    const ApiKey='d0ebdb8ed8362258db5ec41f1d6f68e0'
    const url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
    const [city,setCity]=useState('meerut')
    const [data,setData]=useState()
    const [input,setInput]=useState('meerut')
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
    const handleClick=()=>{
     setCity(input)
    }

 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`);
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setData(data); // Assuming setData is a state setter function
                console.log(data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData(); // Call the async function
    
    },[city]); // Dependencies array
    
    
  return (
    <>
    {
      data ? (
        <div className="card">
        <div className="search">
          <input type="text" value={input} onChange={handleInput} placeholder="Enter city Name" />
          <button onClick={handleClick}>Search</button>
        </div>
        <div className="weather">
          <h1 className="temp">{data.main.temp}C</h1>
          <h2 className="city">{city.toUpperCase()}</h2>
          <div className="details">
            <div className="col">
              <div>
                <p style={{ color: "black" }} className="humidity">
                  {data.main.humidity}
                </p>
                <p style={{ color: "black" }}>humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="../weather app/image/wind-2.png" alt="" width="" />
              <div>
                <p style={{ color: "black" }} className="wind">
                 {data.wind.speed}
                </p>
                <p style={{ color: "black" }}>wind speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ):(<p>loading...</p>)
    }
     
    </>
  );
};
