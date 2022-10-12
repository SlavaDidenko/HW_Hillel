import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import UserLogout from 'components/UserLogout/UserLogout';
import { getFilm } from 'services/getFilms';
const Title = () => {
  const params = useParams();
  const [film, setFilm] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFilm(
          'https://imdb8.p.rapidapi.com/title/get-base',
          {
            tconst: `${params.id}`,
          }
        );

        const rating = await getFilm(
          'https://imdb8.p.rapidapi.com/title/get-ratings',
          {
            tconst: `${params.id}`,
          }
        );

        const genres = await getFilm(
          'https://imdb8.p.rapidapi.com/title/get-genres',
          {
            tconst: `${params.id}`,
          }
        );

        setFilm({
          ...data,
          rating: rating['rating'],
          genres,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <main>
      <div className="userlogout-wrapper">
        <UserLogout></UserLogout>
      </div>
      <div className="container">
        {film ? (
          <div>
            <Link className="home" to={'/browse'}>
              Home
            </Link>
            <h1 className="film-title">{film.title}</h1>
            <div className="wrapper-img">
              <img src={film.image?.url} alt={film.title} />
            </div>
            <p className="text">{film.titleType}</p>
            <p className="text">Year: {film.year}</p>
            <p className="text">Rating: {film.rating}</p>
            <p className="text">Genres: {film.genres.join(', ')}</p>
          </div>
        ) : (
          <p className="text">Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Title;
