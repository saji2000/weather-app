import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  console.log(data);
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description"> {data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="paramater-row">
            <span className="paramater-label top">Details</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Feels like</span>
            <span className="paramater-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Wind</span>
            <span className="paramater-value">{data.wind.speed} m/s</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Humidity</span>
            <span className="paramater-value">{data.main.humidity}%</span>
          </div>
          <div className="paramater-row">
            <span className="paramater-label">Pressure</span>
            <span className="paramater-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
