/*
    JavaScript practice checklist (put this into your JS file):
      1) Drag & drop: use draggable="true" items and implement dragstart, dragover, dragenter, drop to move items into a .drop-area.
      2) Reordering: on drop, insertBefore or appendChild; add a small "move" handle in CSS/HTML if you want.
      3) Persist: save itinerary structure to localStorage (JSON.stringify) and load on page load.
      4) API calls: fetch weather (OpenWeatherMap), reverse geocoding (Nominatim or Google Geocoding), or places API to populate places list.
      5) Export: implement Export JSON to download a .json file of the itinerary.
      6) Map: integrate Leaflet in JS and place markers when items are added.
      7) Accessibility: ensure keyboard drag-drop alternatives (tab + buttons) or at least focus states.

    This HTML is intentionally JS-free so you can practice by wiring up event listeners.
*/

const travelPlaces = document.querySelectorAll(".place");
const dropArea = document.querySelectorAll(".drop-area");

let itenary = {
  1: [],
  2: [],
};
// console.log(places)
travelPlaces.forEach(function (place) {
  place.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", place.dataset.name);
    // e.dataTransfer.setData('text/id', place.dataset.name);
    console.log(e);
  });
});

dropArea.forEach(function (area) {
  area.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  area.addEventListener("drop", function (e) {
    e.preventDefault();
    const name = e.dataTransfer.getData("text/plain");
    const day = area.dataset.day;

    if (!itenary[day]) {
      itenary[day] = [];
    }
    itenary[day].push(name);

    const newItem = document.createElement("div");
    newItem.className = "it-item";
    newItem.textContent = name;
    area.appendChild(newItem);

    travelPlaces.forEach((place) => {
      if (place.dataset.name == name) {
        place.remove();
      }
    });

    console.log(itenary[day]);
  });
});

document.querySelector("#get-weather").addEventListener("click", function (e) {
  // const apiKey = "3fcc5bd28009432e8ed135958251809";
  const city = document.getElementById("weather-city").value;

  if (!city) {
    alert("Please enter the city name");
  }

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=3fcc5bd28009432e8ed135958251809&q=${city}`
  )
    .then((response) => {
      if (!response.ok) {
        return new Error("unable to fetch");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector(
        "#weather-preview"
      ).textContent = `${data.location.name} : Temp in C =  ${data.current.temp_c}`;
      console.log(data);
    })
    .catch((error) => {
      console.log("Error produced", error);
    })
    .finally(() => {
      console.log("Done");
    });
});

const searchInput = document.querySelector("#place-search");
const searchBtn = document.querySelector("#search-btn");
const placeList = document.querySelector("#places-list");

searchBtn.addEventListener("click", function () {
  const searchValue = searchInput.value.trim();
  if (!searchValue) {
    alert("Please enter a city in the search bar");
  }

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=3fcc5bd28009432e8ed135958251809&q=${searchValue}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to find the city");
      }
      return response.json();
    })
    .then((data) => {
      if (searchValue.toLowerCase() == data.location.name.toLowerCase()) {
        const allPlaces = document.querySelectorAll(".place");

        let alreadyExists = false;

        allPlaces.forEach((place) => {
          if (place.dataset.name.toLowerCase() === searchValue.toLowerCase()) {
            alreadyExists = true;
            console.log("city already Exists");
          }
        });

        if (alreadyExists) {
          alert("City already Exists");
          return;
        }
        console.log(data);
        placeDiv = document.createElement("div");
        placeDiv.className = "place";
        placeDiv.draggable = true;
        placeDiv.dataset.name = `${data.location.name}`;
        placeDiv.dataset.lon = `${data.location.lon}`;
        placeDiv.dataset.lat = `${data.location.lat}`;

        placeDiv.innerHTML = `<div>${data.location.name},${data.location.country}</div>`;

        placeDiv.addEventListener("dragstart", function (e) {
          e.dataTransfer.setData("text/plain", placeDiv.dataset.name);
        });

        placeList.appendChild(placeDiv);
        searchInput.value = "";
      } else {
        alert("No city found");
      }
    })
    .catch((error) => {
      console.log("error fetching", error);
    })
    .finally(() => {
      console.log("done all");
    });
});

document.querySelector("#clear-places").addEventListener("click", function () {
  const allPlaces = document.querySelectorAll(".place");
  console.log("Clear btn clicked");
  allPlaces.forEach((place) => {
    place.remove();
  });
});

  

