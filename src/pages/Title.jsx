import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLogout from 'components/UserLogout/UserLogout';
import { useDispatch, useSelector } from 'react-redux';
import { addFilm, asyncFilmCreator, changeParams } from 'store/reducers/titleReducer';
const Title = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(changeParams(params.id));
    dispatch(addFilm())
  }, [params]);

  useEffect(() => {
    dispatch(asyncFilmCreator());
  }, []);

  const film = useSelector(store => store.title.film);

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
