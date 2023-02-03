import React, { useEffect, useState } from 'react'
import "./style.css"
const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune")

    const getWeatherInfo = async() => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}lat=1.202915&lon=4.815225&appid=9e4866b6dc2929dcb0480dd7dc5d6fd2`
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo()
    })
  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type="Search" placeholder='search...' autoFocus id='search' 
                className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      <article className='widget'>
        <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}></i>
        </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>25.5</span>
                </div>
                    <div className="description">
                        <div className='weatherCondition'>sunny</div>
                        <div className="place">Pune, India</div>
                    </div>
            </div>   
                <div className="date">{new Date().toLocaleString()}</div>
            
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br /> Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br /> Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br /> Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br /> Speed
                            </p>
                        </div>
                    </div>
                </div>
      </article>
    </>
  )
}

export default Temp
