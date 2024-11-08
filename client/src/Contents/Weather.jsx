import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const getcurday = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const curTime = new Date();
    const day = daysOfWeek[curTime.getDay()];
    const date = curTime.getDate();
    const month = months[curTime.getMonth()];
    const todayDay = `${date} ${month}`;
    setCurrentDay(day);
    setCurrentDate(todayDay);
  };

  useEffect(() => {
    getcurday();
  }, []);

  return (
    <>
      <div className="container-fluid main_header">
        <div className="main_content">
          <form className="temp_form">
            <input type="text" id="cityName" placeholder="Enter Your City Name" autoComplete="off" />
            <input type="submit" id="submitBtn" value="search" />
          </form>
        </div>

        <div className="tempinfo">
          <div className="top_layer">
            <p id="day">{currentDay}</p>
            <p id="today_day">{currentDate}</p>
          </div>

          <div className="main_layer">
            <p id="city_name">Get Output Here</p>
            <div className="middle_layer data_hide">
              <p id="temp">
                <span id="temp_real_val">0</span>
                <sup>o</sup>C
              </p>
              <p id="temp_status"> <i className="fa-solid fa-cloud"></i></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
