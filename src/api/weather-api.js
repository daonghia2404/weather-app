import { rest } from "api/rest";
const API_KEY = process.env.REACT_APP_API_KEY;
const LANG = 43;

export const apiWeather = {
  getByCity: (id) =>
    rest.get(`/weather?id=${id}&appid=${API_KEY}&lang=${LANG}`),
  // rest.get(`/forecast/daily?id=${id}&appid=${API_KEY}&lang=${LANG}`)
};
