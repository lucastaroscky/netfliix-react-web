import styled from 'styled-components';

export const WarningStyled = styled.p`
    text-align: center;
    color: ${(props) => props.theme.palette.core.primary};
    font-weight: ${(props) => props.theme.layout.font.regular};
`;
