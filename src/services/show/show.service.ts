import axiosInstance from 'modules/axios/axios';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';

const showService = () => {
  const token = localStorage.getItem(USER_TOKEN_COOKIE);

  const showsList = () => axiosInstance.get('/shows', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return {
    showsList,
  };
};

export default showService;
