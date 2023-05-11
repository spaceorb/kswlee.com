import axios from "axios";
const URL = `https://api.weatherapi.com/v1/current.json?key=7ad25b8583224ebc8da133056230603&q=95035`;

const getWeather = async () => {
  try {
    const request = await axios.get(URL);
    return request.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default { getWeather };
