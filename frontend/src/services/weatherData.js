import axios from "axios";

const URL = `https://api.weatherapi.com/v1/current.json?key=7ad25b8583224ebc8da133056230603&q=95035`;
// const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
// const URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=95035`;
// console.log("WEATHER_API_KEY", WEATHER_API_KEY);
// console.log("URL", URL);

const getWeather = async () => {
  try {
    const request = await axios.get(URL);
    console.log("request", request);

    console.log("zzzz");
    return request.data;
  } catch (error) {
    console.error("hi", error);
    return null;
  }
};

/* eslint-disable */
export default { getWeather };
