import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;

}
body {
    font-family: "Open Sans";
    font-style: normal;
}
a {
    display: block;
    text-decoration: none;
    color: inherit;
}
button {
    padding: 0;
    border: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}
ol,
ul {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}
img {
    display: block;
    width: 100%;
}
address {
    font-style: normal;
}
`;

export default GlobalStyle;
