import { WarningStyled } from "./notification-warning.styled";

export default function Warning(props: any) {
    const { message, ...restProps } = props;
    return (
        <WarningStyled {...restProps}>
            {message}
        </WarningStyled>
    )
}