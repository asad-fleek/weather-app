      const apiKey = "1c061ece98cf084bc562c1f1422ec401";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkweather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        

        if (response.status == 404) {
          document.querySelector(".weather").style.display = "none";
          document.querySelector(".error").style.display = "block";
        } else {
          let data = await response.json();
          console.log(data);
          

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          const weatherMain = data.weather[0].main;

          if (weatherMain === "Cloud") {
            weatherIcon.src = "images/cloudes.png";
          } else if (weatherMain === "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (weatherMain === "drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (weatherMain === "mist") {
            weatherIcon.src = "images/mist.png";
          } else if (weatherMain === "rain") {
            weatherIcon.src = "images/rain.png";
          } else if (weatherMain === "clear") {
            weatherIcon.src = "images/clear.png";
          } else if (weatherMain === "snow") {
            weatherIcon.src = "images/snow.png";
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      searchBtn.addEventListener("click", () => {
        console.log(123);
        
        checkweather(searchBox.value);
      });