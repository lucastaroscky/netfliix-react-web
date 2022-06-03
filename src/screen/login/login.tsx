import { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import Input from '../../components/input/input'
import Button from '../../components/button/button';
import Wrapper from '../../components/wrapper/wrapper';
import Warning from '../../components/notifications/warning/notification-warning';
import { login } from '../../schemas/login.schema';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

export default function Form() {
    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    const handleChange = useCallback(
        ({ target }: any) => {
            setData(prevData => ({
                ...prevData,
                [target.name]: target.value
            }))
        },
        [setData]
    )

    const handleSend = useCallback(
        async () => {
            try {
                await login.validate(data)
                setError('')
            } catch (error: any) {
                setError(error.errors[0])
            }
        },
        [data]
    )

    return (
        <Wrapper
            container
            flexDirection='column'
            justifyContent='center'
            alignContent='center'>
            <Grid item xs={2}>
                <Logo />
                <Input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    onChange={handleChange}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Senha'
                    onChange={handleChange}
                />
                <Button onClick={handleSend}>Entrar</Button>
                {error && <Warning message={error} />}
            </Grid >
        </Wrapper >
    )
}
