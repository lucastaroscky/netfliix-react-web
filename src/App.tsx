import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Login from './screens/login/login';
import { LOGIN_URL } from './screens/login/login.types';
import { GlobalStyle } from './themes/main/global-style';
import { theme } from './themes/main/theme';
import { store } from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={LOGIN_URL} element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
