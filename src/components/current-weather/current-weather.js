import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> London</p>
          <p className="weather-description"> Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="paramater-row">
            <span className="paramater-label top">Details</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Feels like</span>
            <span className="paramater-value">22 °C</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Wind</span>
            <span className="paramater-value">4 km/h</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Humidity</span>
            <span className="paramater-value">15%</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Pressure</span>
            <span className="paramater-value">12 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
