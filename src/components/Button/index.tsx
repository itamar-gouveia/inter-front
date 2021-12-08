import { ButtonContainer } from "./styles";
import {ButtonHTMLAttributes} from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button;