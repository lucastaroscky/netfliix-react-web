import React, { ChangeEvent, useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Warning from '../../components/form-error/form-error';
import login from '../../schemas/login.schema';
import Logo from '../../components/logo/logo';
import Wrapper from '../../components/wrapper/wrapper';
import { userSlice } from '../../store/user/user.slice';
import { Error } from '../../types/yup';

export default function Form() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState(['']);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const resetError = useCallback((errorMessage: string[]) => {
    resetError(errorMessage);
  }, []);

  const handleSend = useCallback(async () => {
    try {
      await login.validate(data, { abortEarly: false });

      dispatch(userSlice.actions.setData(data));
      resetError(['']);
    } catch (yupError: any) {
      setError(((yupError as Error).errors));
    }
  }, [data]);

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
