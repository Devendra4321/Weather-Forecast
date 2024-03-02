let btn = document.getElementById("button");
let result = document.getElementById("result");
let h2 = document.querySelector(".heading");
let city = document.querySelector(".city");
let temperature = document.querySelectorAll(".temperature");
let wind = document.querySelectorAll(".wind");
let description = document.querySelector(".description");
let lastDayWeather = document.querySelector(".last-day");

async function getWeather(city) {
  try {
    let res = await axios.get(
      `https://goweather.herokuapp.com/weather/${city}`
    );
    return res.data;
  } catch (error) {
    return "Something wrong!";
  }
}

btn.addEventListener("click", async () => {
  let input = document.getElementById("input").value;
  if (input === "") {
    alert("Please enter a valid city name");
  } else {
    let data = await getWeather(input);
    h2.innerHTML = "Weather";
    city.innerHTML = `<span>City: ${input} </span>`;
    temperature[0].innerHTML = `<span>Temperature: ${data.temperature} </span>`;
    wind[0].innerHTML = `<span>Wind: ${data.wind} </span>`;
    description.innerHTML = `<span>Description: ${data.description} </span>`;
    lastDayWeather.innerHTML = "Last day's weather forcast";
    for (let forecast of data.forecast) {
      temperature[1].innerHTML = `<span>Temperature: ${forecast.temperature} </span>`;
      wind[1].innerHTML = `<span>Wind: ${forecast.wind} </span>`;
    }
  }
});
