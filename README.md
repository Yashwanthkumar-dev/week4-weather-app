# Aura Weather Application

## Project Overview

Aura Weather is a responsive weather application that provides real-time weather information and forecasts for cities around the world. The application fetches live weather data using the OpenWeatherMap API and displays current weather conditions, temperature, humidity, wind speed, and forecast details in a clean and user-friendly interface.

The project demonstrates API integration, asynchronous JavaScript programming, DOM manipulation, responsive design, and error handling techniques.

---

## Objectives

* Provide real-time weather information.
* Allow users to search weather by city name.
* Display current weather conditions and forecasts.
* Create a responsive user interface for all devices.
* Implement proper error handling and validation.
* Practice API integration using JavaScript.

---

## Features

* Current Weather Conditions
* City Search Functionality
* Real-Time Weather Data
* 5-Day Weather Forecast
* Weather Icons
* Responsive Design
* Error Handling
* Input Validation
* User-Friendly Interface

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### API

* OpenWeatherMap API

### Tools

* Visual Studio Code
* Git
* GitHub

---

## Project Structure

```text
week4-weather-app/
│── index.html
│── css/
│   ├── style.css
│── js/
│   ├── index.js
```

---

## Setup Instructions

### Step 1: Clone the Repository

```bash
https://github.com/Yashwanthkumar-dev/week4-weather-app.git
```

### Step 2: Open the Project

Open the project folder in Visual Studio Code.


### Step 4: Run the Application

Open `index.html` in your browser or deploy the project using GitHub Pages.

---

## API Used

### OpenWeatherMap API

This application uses the weatherAPI to fetch weather information.

### Endpoints Used

#### Current Weather

```text
https://api.weatherapi.com/v1
```

## Application Workflow

1. User enters a city name.
2. Input is validated.
3. API request is sent.
4. Weather data is retrieved.
5. JSON response is processed.
6. Current weather information is displayed.
7. Forecast information is displayed.
8. Errors are handled when necessary.

---

## System Architecture

```text
User
  ↓
Weather Application Interface
  ↓
JavaScript Logic
  ↓
WeatherAPI
  ↓
JSON Response
  ↓
DOM Update
  ↓
Weather Information Display
```

---

## Testing

| Test Case              | Input         | Expected Result       | Status |
| ---------------------- | ------------- | --------------------- | ------ |
| Valid City             | Chennai       | Weather Data Display  | Pass   |
| Invalid City           | xyz123        | Error Message Display | Pass   |
| Empty Input            | Blank         | Validation Message    | Pass   |
| Invalid API Key        | Wrong Key     | API Error Handling    | Pass   |
| Mobile Responsive View | Mobile Device | Responsive Layout     | Pass   |

---

## Error Handling

The application handles various error scenarios:

* Invalid city names
* Empty search input
* API request failures
* Network connectivity issues
* Invalid API responses

User-friendly error messages are displayed to improve the overall experience.

---

## Screenshots



---

## Future Enhancements

* Favorite Cities Feature
* Celsius/Fahrenheit Conversion
* Dark Mode Support
* Geolocation-Based Weather Detection
* Hourly Forecast
* Weather Alerts
* Search Suggestions

---

## Author

**Yashwanth Kumar**

Java Full Stack Developer

---

## Conclusion

Aura Weather is a responsive weather application that successfully integrates with the OpenWeatherMap API to provide real-time weather information. The project demonstrates frontend development concepts such as API integration, asynchronous programming, responsive design, and effective error handling while delivering a smooth and user-friendly experience.

---
