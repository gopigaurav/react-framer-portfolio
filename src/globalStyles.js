import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
a:-webkit-any-link{
    cursor: none ;
    list-style: none;
    text-decoration: none;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Josefin Sans', sans-serif;
    cursor: none !important;
}

`;

export default GlobalStyle;
