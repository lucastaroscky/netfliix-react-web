import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userAction } from 'store/user/user.slice';
import { LOGIN_URL } from 'screens/login/login.types';
import { getToken } from 'store/user/user.selector';
import Icon from '../icon/icon';
import { ExitStyled } from './logout.styled';

export default function Logout() {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const from = useLocation();

  const logoutApp = useCallback(() => {
    dispatch(userAction.logout());
  }, []);

  useEffect(() => {
    if (!token) {
      navigate(LOGIN_URL, { state: from });
    }
  }, [token]);

  return (
    <Icon>
      <ExitStyled onClick={logoutApp} />
    </Icon>
  );
}
