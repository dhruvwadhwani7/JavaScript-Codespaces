# Weather App - JavaScript Tasks

You need to implement the following JS functionalities:

1. **Weather API Call**
   - Use `fetch` with [WeatherAPI](https://www.weatherapi.com/) or OpenWeather API.
   - Input: City name from `#searchInput`
   - Output: Update `#cityName`, `#temperature`, `#condition`, `#humidity`.

2. **Draggable Cities**
   - Make `.city` elements draggable.
   - Drop them inside `.drop-area`.
   - On drop, fetch weather data of that city and append it as a new weather card inside the drop area.

3. **Save Favorites**
   - Store dropped cities in `localStorage`.
   - On reload, load favorite cities automatically.

4. **Extra Features (Optional)**
   - Dark/Light Mode toggle.
   - Geolocation weather (current location).
   - Animate card transitions.

---
👉 You will create a `script.js` later and link it to this page.


# Weather App - Favorites Page (JavaScript Tasks)

This page should display the **favorite cities** that the user saved from the `index.html` page.

## Tasks

1. **Load Favorites from localStorage**
   - Retrieve favorite cities list stored in `localStorage`.
   - If no favorites are found, display a message like: "No favorite cities added yet."

2. **Fetch Weather Data**
   - For each favorite city, call the Weather API.
   - Create a `.weather-card` dynamically with:
     - City name
     - Temperature
     - Condition
     - Humidity
   - Append each card inside `#favoritesContainer`.

3. **Remove City from Favorites (Optional)**
   - Add a small ❌ button on each card.
   - When clicked, remove the city from `localStorage` and re-render the list.

4. **Extra Features (Optional)**
   - Add a "Clear All Favorites" button.
   - Sort cities alphabetically or by temperature.
   - Add animations when cards appear.

---
👉 You will later create a `favorites.js` file and link it to this page.


# Weather App - Home Page (JavaScript Tasks)

This page is the **main entry point** of the Weather App.  
You will implement the following features step by step:

---

## 1. Search Weather by City
- Capture input from `#searchInput` when the **Search button** is clicked.
- Call a weather API (WeatherAPI or OpenWeather).
- Update these elements:
  - `#cityName`
  - `#temperature`
  - `#condition`
  - `#humidity`
  - `#wind`

---

## 2. Current Location Weather
- Use **Geolocation API** (`navigator.geolocation.getCurrentPosition`).
- Get latitude & longitude → call API with coordinates.
- Update the main weather card with current location weather.

---

## 3. 3-Day Forecast
- After fetching weather data, also fetch **3-day forecast**.
- Dynamically create `.forecast-card` elements inside `#forecastContainer`:
  - Day name
  - Temperature
  - Condition icon
- Append them as children of `#forecastContainer`.

---

## 4. Drag & Drop Favorite Cities
- Make `.city` elements draggable.
- Allow dropping inside `.drop-area`.
- When dropped:
  - Fetch that city’s weather.
  - Create a `.weather-card` and insert it in `.drop-area`.
  - Save the city name into `localStorage` under `favorites`.

---

## 5. Extra (Optional)
- Add **loading spinner** while fetching API.
- Add **dark/light theme toggle**.
- Animate card transitions using CSS classes.

---
👉 You will create a `script.js` file for this page.


# Weather App - Favorites Page (JavaScript Tasks)

This page displays **saved favorite cities**.  
You will implement logic to manage and show them dynamically.

---

## 1. Load Favorites
- Retrieve the list of cities from `localStorage` (saved from the home page).
- If none exist → display a message like:
  - `"No favorite cities yet. Go add some from the Home page!"`

---

## 2. Fetch Weather Data
- For each saved city:
  - Call the weather API.
  - Create a `.weather-card` with:
    - City name
    - Temperature
    - Condition
    - Humidity
  - Append it inside `#favoritesContainer`.

---

## 3. Remove a City (Optional)
- Add a ❌ (remove) button inside each `.weather-card`.
- When clicked:
  - Remove that city from `localStorage`.
  - Re-render the favorites list.

---

## 4. Clear All (Optional)
- Add a **Clear All** button at the top.
- When clicked:
  - Remove all saved favorites from `localStorage`.
  - Clear the container.

---

## 5. Extra (Optional)
- Allow sorting favorites by:
  - Temperature
  - Alphabetical order
- Animate card loading (fade/slide in).

---
👉 You will create a `favorites.js` file for this page.
