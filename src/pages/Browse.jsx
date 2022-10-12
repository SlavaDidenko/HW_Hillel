import UserLogout from 'components/UserLogout/UserLogout';
import useToggle from 'hooks/useToggle';
import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getFilms } from 'services/getFilms';
const Browse = () => {
  const [value, setValue] = useState('');
  const [listAutoComplete, setListAutoComplete] = useState([]);
  const [listFilms, setListFilms] = useState([]);
  const { isOpen: isOpenSearch, toggle: toggleSearch } = useToggle();

  const isMounted = useRef(false);

  const searchListStyle = ['search-input__list'];

  useEffect(() => {
    if (isMounted.current) {
      const getData = async () => {
        const data = await getFilms(
          'https://imdb8.p.rapidapi.com/title/auto-complete',
          { q: value }
        );
        setListAutoComplete(data);
      };
      getData();
    } else {
      isMounted.current = true;
    }
  }, [value]);

  useEffect(() => {
    const getData = async () => {
      const data = await getFilms(
        'https://imdb8.p.rapidapi.com/title/auto-complete',
        {
          q: 'elc',
        }
      );
      setListFilms(data);
    };
    getData();
  }, []);

  if (!isOpenSearch) {
    searchListStyle.push('hidden');
  }

  return (
    <main>
      <div className="search-wrapper">
        <div className="wrapper">
          <input
            onFocus={toggleSearch}
            onBlur={toggleSearch}
            onInput={e => setValue(e.target.value)}
            value={value}
            className="search-input"
          ></input>
          {listAutoComplete.length && (
            <div className={searchListStyle.join(' ')}>
              <ul className="search-list">
                {listAutoComplete.map(item => {
                  return (
                    <li key={item.id} className="search-input__item">
                      <Link to={`/title/${item.id}`}>
                        <h2 className="search-input__title">{item.l}</h2>
                        <div className="search-input__wrapper-img">
                          <img src={item.i?.imageUrl}></img>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <UserLogout></UserLogout>
      </div>
      {listFilms ? (
        <div className="films">
          {listFilms.map(item => {
            return (
              <div key={item.id}>
                <Link to={`/title/${item.id}`}>
                  <div className="films__wrapper-img">
                    <img src={item.i?.imageUrl}></img>
                  </div>
                  <h2 className="films__title">{item.l}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </main>
  );
};

export default Browse;
