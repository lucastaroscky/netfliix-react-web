import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { errorMessage, getToken } from 'store/user/user.selector';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOVIES_LIST_URL } from 'screens/shows/shows.type';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Warning from '../../components/form-error/form-error';
import login from '../../schemas/login.schema';
import Logo from '../../components/logo/logo';
import Wrapper from '../../components/wrapper/wrapper';
import { userAction } from '../../store/user/user.slice';
import { Error } from '../../types/yup';

export default function Form() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState(['']);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const from = useLocation();
  const userError = useSelector(errorMessage);
  const token = useSelector(getToken);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSend = useCallback(async () => {
    try {
      await login.validate(data, { abortEarly: false });

      dispatch(userAction.authentication(data));
    } catch (yupError: any) {
      setError((yupError as Error).errors);
    }
  }, [data]);

  useEffect(() => setError(userError), [userError]);

  useEffect(() => {
    if (token) {
      navigate(MOVIES_LIST_URL, {
        state: from,
      });
    }
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_COOKIE);

    if (localToken) {
      dispatch(userAction.setData({ token: localToken }));
    }
  }, []);

  return (
    <Wrapper
      container
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
    >
      <Grid item xs={2}>
        <Logo />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
      {error && error.map((err) => <Warning key={err} message={err} />)}
    </Wrapper>
  );
}
