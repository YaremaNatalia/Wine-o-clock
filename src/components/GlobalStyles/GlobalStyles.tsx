import { FC } from 'react';
import { Global, css } from '@emotion/react';
import 'modern-normalize';
import {
  montserratBold,
  montserratMedium,
  montserratRegular,
  montserratSemiBold,
  montserratThin,
  poppinsMedium,
} from '@/fonts';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${montserratBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${montserratSemiBold}) format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${montserratMedium}) format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${montserratRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${montserratThin}) format('truetype');
        font-weight: 100;
      }

      @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), url(${poppinsMedium}) format('truetype');
        font-weight: 500;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
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
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
