import { createGlobalStyle } from "styled-components";
import { size } from "../utils/break-points";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
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
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}
img {
    display: block;
}
address {
    font-style: normal;
}
section {
    /* width: ${size.mobile};
    margin: 0 auto;
    padding: 0 33px;
     */
}
`;

export default GlobalStyle;
