import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city"> London</p>
        <p className="weather-description"> Sunny</p>
      </div>
      <img alt="weather" className="weather-icon" src="icons/01d.png" />
    </div>
  );
};

export default CurrentWeather;
