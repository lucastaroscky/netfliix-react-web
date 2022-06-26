import styled from 'styled-components';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const ExitStyled = styled(ExitToAppIcon)`
    color: ${(props) => props.theme.palette.core.contrast}
`;
