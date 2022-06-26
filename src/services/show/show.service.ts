import axiosInstance from 'modules/axios/axios';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';

const showService = () => {
  const token = localStorage.getItem(USER_TOKEN_COOKIE);
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getShows = () => axiosInstance.get('/shows', headers);
  const getList = () => axiosInstance.get('/list', headers);

  return {
    getShows,
    getList,
  };
};

export default showService;
