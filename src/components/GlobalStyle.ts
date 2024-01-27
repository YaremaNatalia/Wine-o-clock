import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const theme = {
  colors: {
    primeryWhite: "#FFFFFF",
    primeryBlack: "#141414",
    primeryBergundy: "#7C0021",
    secondaryGrey: "#747474",
    secondaryGreen: "#47A025",
    secondaryOrange: "#F44708",
  },
};

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Montserrat', sans-serif;
  /* line-height: 1.5; */
  color: ${({ theme: { colors } }) => colors.primeryBlack};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
