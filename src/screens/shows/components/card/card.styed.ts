import { Card, CardMedia } from '@mui/material';
import styled from 'styled-components';

export const CardStyled = styled(Card)`
    justify-content: space-between;
    padding: 0 2vh;
    flex: none;
`;

export const CardMediaStyled = styled(CardMedia)`
    height: 450px;
    border-radius: ${(props) => props.theme.layout.border.maxclear};
`;
