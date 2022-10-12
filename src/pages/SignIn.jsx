import React , {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DefaultRoute from 'router/DefaultRoute';
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    dispatch({type:"LOGGED_IN" , payload: data})
    localStorage.setItem('sign', JSON.stringify(data))
    navigate('/browse');
  };

  return (
    <div>
        <DefaultRoute></DefaultRoute>
      <form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="sign-input"
          placeholder="login"
          {...register('login', {
            minLength: {
              value: 5,
              message: 'Логін містить більше 5 символів',
            },
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
        />
        <div className="sign-err">
          {errors.login && (
            <p className="error">
              {errors.login.message || 'Не правильно введений логін'}
            </p>
          )}
        </div>
        <input
          className="sign-input"
          placeholder="password"
          {...register('password', {
            minLength: {
              value: 8,
              message: 'Пароль містить більше 8 символів',
            },
            max: 99,
            required: true,
          })}
        />
        <div className="sign-err">
          {errors.password && (
            <p className="error">
              {errors.password.message || 'Не правильно введений пароль'}
            </p>
          )}
        </div>
        <input className="sign-btn" type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
