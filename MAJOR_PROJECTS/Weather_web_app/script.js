function fetchWeatherUpdates(city) {
  const elements = {
    cityName: document.getElementById("cityName"),
    temp: document.getElementById("temperature"),
    condition: document.getElementById("condition"),
    humidity: document.getElementById("humidity"),
    wind: document.getElementById("wind"),
  };
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=3fcc5bd28009432e8ed135958251809&q=${city}`
  )
    .then((response) => {
      if (!response.ok) {
        return new Error("unable to fetch the city stats");
      }
      return response.json();
    })
    .then((data) => {
      const weatherCard = document.querySelector(".weather-card");

      elements.cityName.innerHTML = `${data.location.name}`;
      elements.temp.innerHTML = `Temp : ${data.current.temp_c} C`;
      elements.condition.innerHTML = `${data.current.condition.text}`;
      elements.humidity.innerHTML = `Humidity : ${data.current.humidity}`;
      elements.wind.innerHTML = `Wind Speed : ${data.current.wind_kph} KPH`;

      //clearing the old image
      const oldImage = document.querySelector(".weather-image");
      if (oldImage) {
        oldImage.remove();
      }

      //add new image
      const weatherImage = document.createElement("img");
      weatherImage.className = "weather-image";
      weatherImage.src = data.current.condition.icon;
      weatherCard.appendChild(weatherImage);

      // console.log(data.current)
      // console.log(data)
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    })
    .finally(() => {
      console.log("Fetching has been done");
    });
}

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function () {
  const city = document.querySelector("#searchInput").value;
  if (!city) {
    alert("Please enter a city name");
  }
  fetchWeatherUpdates(city);
});

const currentLocBtn = document.querySelector("#locationBtn");
currentLocBtn.addEventListener("click", function () {
  fetch("http://ip-api.com/json/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const userCity = data.city;
      fetchWeatherUpdates(userCity);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("done with this shit always never gonna do it again");
    });
});

const dragFavCities = document.querySelectorAll(".city");
const dropArea = document.querySelectorAll(".drop-area");

dragFavCities.forEach((city) => {
  city.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", city.dataset.name);
    console.log(e.dataTransfer);
  });
});

dropArea.forEach((area) => {
  area.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  area.addEventListener("drop", function (e) {
    e.preventDefault();

    const name = e.dataTransfer.getData("text/plain");

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=3fcc5bd28009432e8ed135958251809&q=${name}`
    )
      .then((response) => {
        if (!response.ok) {
          alert("Unable to fetch");
        }
        return response.json();
      })
      .then((data) => {
        const newItem = document.createElement("div");

        newItem.draggable = true;
        newItem.className = "card"; // outer container

        newItem.innerHTML = `
        <div class="card-content">
            <div class="card-title">${name}</div>
            <div class="card-grid">
                <div class="grid-item">Temperature: ${data.current.temp_c} °C</div>
                <div class="grid-item">Condition: ${data.current.condition.text}</div>
                <div class="grid-item">Humidity: ${data.current.humidity}%</div>
                <div class="grid-item">Wind: ${data.current.wind_kph} KPH</div>
            </div>
        </div>`;

        // check duplicates in this drop area
        const existingCards = area.querySelectorAll(".card");
        let alreadyExists = false;

        existingCards.forEach((card) => {
          const title = card.querySelector(".card-title").textContent;
          if (title === name) {
            alreadyExists = true;
          }
        });

        if (alreadyExists) {
          alert("City already exists");
        }
        area.appendChild(newItem);        
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        console.log("done with drag event");
      });
  });
});
//`http://api.weatherapi.com/v1/current.json?key=3fcc5bd28009432e8ed135958251809&q=${city}`
