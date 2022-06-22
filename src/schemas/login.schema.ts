import * as yup from 'yup';

const login = yup.object().shape({
  email: yup.string().required('E-mail field must be filled!').email(),
  password: yup.string().required('Password field must be filled!'),
});

export default login;
