document.addEventListener('DOMContentLoaded', () => {
    
    const submitBtn = document.getElementById('submitBtn');
    const cityName = document.getElementById('cityName');
    const city_name = document.getElementById('city_name');
    const temp_real_val = document.getElementById('temp_real_val');
    const temp_status = document.getElementById('temp_status');
    const datahide = document.querySelector('.middle_layer');
  
    const getInfo = async (event) => {
      event.preventDefault();
      const cityVal = cityName.value;
  
      if (cityVal === '') {
        city_name.innerText = 'Please write something before search';
        datahide.classList.add('data_hide');
      } else {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=65a2d11d0157e2aedbd717a4928d3153`;
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
  
          const arrData = [data];
          city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
          temp_real_val.innerText = arrData[0].main.temp;
          const tempmood = arrData[0].weather[0].main;
  
          if (tempmood === 'Clear') {
            temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #eccc68;"></i>';
          } else if (tempmood === 'Clouds') {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color: #0097e6;"></i>';
          } else if (tempmood === 'Rain') {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color: #a4b0be;"></i>';
          } else if (tempmood === 'Haze') {
            temp_status.innerHTML = '<i class="fa-solid fa-smog" style="color: #828688;"></i>';
          } else {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud-sun"  style="color: #0097e6;"></i>';
          }
          datahide.classList.remove('data_hide');
        } catch (error) {
          city_name.innerText = 'Sorry, we couldn\'t get the city, please rewrite it properly.';
          datahide.classList.add('data_hide');
        }
      }
    };
  
    submitBtn.addEventListener('click', getInfo);
  });
  