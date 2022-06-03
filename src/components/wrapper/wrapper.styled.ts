import { Grid } from "@mui/material"
import styled from "styled-components"

export const WrapperStyled = styled(Grid)`
    min-height: 100vh;
    background-color:  ${props => props.theme.palette.core.secondary};
`