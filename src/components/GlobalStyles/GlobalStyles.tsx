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
  fontSpringDemoQuicheSans,
} from '@/fonts';
import { FontFamilyNames, theme } from '@/constants';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${FontFamilyNames.fontSpringDemoQuicheSans};
        src: local(${FontFamilyNames.fontSpringDemoQuicheSans}),
          url(${fontSpringDemoQuicheSans}) format('opentype');
        font-weight: ${theme.fontWeight.bold};
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratBold}) format('truetype');
        font-weight: ${theme.fontWeight.bold};
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratSemiBold}) format('truetype');
        font-weight: ${theme.fontWeight.semiBold};
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratMedium}) format('truetype');
        font-weight: ${theme.fontWeight.medium};
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratRegular}) format('truetype');
        font-weight: ${theme.fontWeight.regular};
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratThin}) format('truetype');
        font-weight: ${theme.fontWeight.thin};
      }

      @font-face {
        font-family: ${FontFamilyNames.poppins};
        src: local(${FontFamilyNames.poppins}),
          url(${poppinsMedium}) format('truetype');
        font-weight: ${theme.fontWeight.medium};
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
