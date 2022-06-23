import styled from 'styled-components';

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.palette.typography.primary};
  background-color: ${(props) => props.theme.palette.core.primary};
  width: 100%;
  padding: 9px;
  border-radius: ${(props) => props.theme.layout.border.medium};
  margin: 0 0 22px;
  border: 0;
`;

export default ButtonStyled;
