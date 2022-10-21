import React , {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DefaultRoute from 'router/DefaultRoute';
import { signAction } from 'store/reducers/signReducer';
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const asyncSign = (data) => {
    return async (dispatch) => {
      setTimeout(() => {
        dispatch(signAction(data));
      })
    }
  }

  const onSubmit = data => {
    dispatch(asyncSign(data))
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
              message: 'Login contains more than 5 characters',
            },
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
        />
        <div className="sign-err">
          {errors.login && (
            <p className="error">
              {errors.login.message || 'Incorrectly entered login'}
            </p>
          )}
        </div>
        <input
          className="sign-input"
          placeholder="password"
          {...register('password', {
            minLength: {
              value: 8,
              message: 'Password contains more than 8 characters',
            },
            max: 99,
            required: true,
          })}
        />
        <div className="sign-err">
          {errors.password && (
            <p className="error">
              {errors.password.message || 'The password is not entered correctly'}
            </p>
          )}
        </div>
        <input className="sign-btn" type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
