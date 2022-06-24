import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL } from 'screens/login/login.types';
import { getToken } from 'store/user/user.selector';
import { Props } from './guard.types';

export default function Guard({ children }: Props) {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const from = useLocation();

  useEffect(() => {
    if (!token) {
      navigate(LOGIN_URL, {
        state: from,
      });
    }
  }, [token]);

  return children;
}
