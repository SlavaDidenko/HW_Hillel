import UserLogout from 'components/UserLogout/UserLogout';
import useToggle from 'hooks/useToggle';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAutoCompleteFilmsCreator, asyncFilmsCreator } from 'store/reducers/browseReducer';
import { valueAction } from 'store/reducers/browseReducer';
import { changeParams } from 'store/reducers/titleReducer';

const Browse = () => {
  const listAutoComplete = useSelector(store => store.browse.listAutoComplete);
  const value = useSelector(store => store.browse.value);
  const listFilms = useSelector(store => store.browse.listFilms);

  const { isOpen: isOpenSearch, toggle: toggleSearch } = useToggle();

  const isMounted = useRef(false);
  const searchListStyle = ['search-input__list'];

  const dispatch = useDispatch();
  useEffect(() => {
    if (isMounted.current) {
      dispatch(asyncAutoCompleteFilmsCreator())
    } else {
      isMounted.current = true;
    }
  }, [value]);

  useEffect(() => {
    dispatch(asyncFilmsCreator())
  }, []);

  if (!isOpenSearch) {
    searchListStyle.push('hidden');
  }

  const asyncValue = (e) => {
    return async (dispatch) => {
      setTimeout(() => {
        dispatch(valueAction(e));
      })
    }
  }
  return (
    <main>
      <div className="search-wrapper">
        <div className="wrapper">
          <input
            onFocus={toggleSearch}
            onBlur={toggleSearch}
            onInput={e => dispatch(asyncValue(e.target.value))}
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
