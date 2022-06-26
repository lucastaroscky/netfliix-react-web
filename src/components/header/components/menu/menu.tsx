import React, { useCallback, useState } from 'react';
import Icon from '../icon/icon';
import Logout from '../logout/logout';
import { MenuStyled } from './menu.styled';

export default function Menu() {
  const [logout, setLogout] = useState(false);

  const handleClick = useCallback(() => {
    setLogout(true);
  }, []);

  return (
    <>
      {logout && <Logout />}
      <Icon>
        <MenuStyled onClick={handleClick} />
      </Icon>
    </>
  );
}
