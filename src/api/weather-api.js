import { rest } from "api/rest";
const API_KEY = process.env.REACT_APP_API_KEY;
const LANG = 43;

// Hanoi City
const lon = 105.883331;
const lat = 21.116671;

export const apiWeather = {
  getByCity: (id) =>
    rest.get(`/weather?id=${id}&appid=${API_KEY}&lang=${LANG}`),
  getDailyWeather: (id) =>
    rest.get(
      `/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely&appid=${API_KEY}&lang=${LANG}`
    ),
};
