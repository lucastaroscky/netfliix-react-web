import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './screens/login/login';
import { LOGIN_URL } from './screens/login/login.types';
import { GlobalStyle } from './themes/main/global-style';
import { theme } from './themes/main/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes >
          <Route path={LOGIN_URL} element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
