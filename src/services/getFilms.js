import axios from "axios";

export async function getFilms(url, params) {
  let data = [];
  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Key': '5a61d769b4msh280cfc851da4b36p1b20b3jsn4b668918e907',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  };

  const response = await axios.request(options);
  data = await response.data.d?.filter(el => /t+\d+/i.test(el.id));
  return data
}

export async function getFilm(url, params) {
  let data = [];
  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Key': '5a61d769b4msh280cfc851da4b36p1b20b3jsn4b668918e907',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  };

  const response = await axios.request(options)
  data = await response.data

  return data
}
