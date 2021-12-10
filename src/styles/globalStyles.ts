import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.colors.background};
    }
    input{
        outline: none;
    }
`;

export default GlobalStyle;