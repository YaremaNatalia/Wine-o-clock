import FontFamilyNames from './fontFamilyNames';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryWhite: string;
    primaryBlack: string;
    primaryBurgundy: string;
    secondaryGrey: string;
    secondaryGreen: string;
    secondaryOrange: string;
    decorativeColor: string;
    primaryAccentColor: string;
  };
  fontFamily: {
    primaryFontFamily: FontFamilyNames;
    secondaryFontFamily: FontFamilyNames;
  };
  fontWeight: {
    bold: number;
    semiBold: number;
    medium: number;
    regular: number;
    thin: number;
  };
  fontSize: {
    // primaryFontSize: number;
    // secondaryFontSize: number
  };
  padding: {
    containerPadding: number;
    sectionPadding: {
      desktop: number;
      tablet: number;
      mobile: number;
    };
  };
  containerWidth: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryWhite: '#FFFFFF',
    primaryBlack: '#141414',
    primaryBurgundy: '#7C0021',
    secondaryGrey: '#747474',
    secondaryGreen: '#47A025',
    secondaryOrange: '#F44708',
    decorativeColor: '#6C6C6C',
    primaryAccentColor: '#540016',
  },
  fontFamily: {
    primaryFontFamily: FontFamilyNames.montserrat,
    secondaryFontFamily: FontFamilyNames.poppins,
  },
  fontWeight: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    thin: 100,
  },
  fontSize: {
    // primaryFontSize: 16,
    // secondaryFontSize: 18,
  },
  padding: {
    containerPadding: 16,
    sectionPadding: {
      desktop: 50,
      tablet: 40,
      mobile: 40,
    },
  },
  // borderRadius: {
  // },
  containerWidth: {
    desktop: 1280,
    tablet: 688,
    mobile: 327,
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
