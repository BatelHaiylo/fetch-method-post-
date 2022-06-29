const BASIC_API = "https://api.openweathermap.org/data/2.5/";
const APIkey = "051f190165f3c733454ab2494da97d47";

async function getWeather(cityName) {
  // let cityName = "Adis Abeba"
  try {
    return await fetch(
      `${BASIC_API}weather?q=${cityName}&appid=${APIkey}`
    ).then((res) => res.json());
  } catch (err) {
  } finally {
  }
}

function printWeatherToScreen() {
  getWeather(document.getElementById("city_name").value).then((res) => {
    for (let key in res) {
      for (let item in res[key]) {
        document.getElementById(
          "city_weather_data"
        ).innerText += `${key}: ${item}`;
      }
      document.getElementById("city_weather_data").innerText += `\n`;
    }
  });
}

function printWeather() {
  getWeather(document.getElementById("city_name").value).then((res) =>
    console.log(res)
  );
}
printWeather();
