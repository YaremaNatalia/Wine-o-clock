declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primeryWhite: string;
    primeryBlack: string;
    primeryBergundy: string;
    secondaryGrey: string;
    secondaryGreen: string;
    secondaryOrange: string;
  };
  fontWeight: {
    // primaryFontWeight: number;
    // secondaryFontWeight: number;
    // otherFontWeight: number;
  };
  fontSize: {
    // primaryFontSize: number;
    // secondaryFontSize: number
  };
  padding: {
    sectionPadding: number;
    containerPadding: number;
  };
  deskContainerWidth: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primeryWhite: '#FFFFFF',
    primeryBlack: '#141414',
    primeryBergundy: '#7C0021',
    secondaryGrey: '#747474',
    secondaryGreen: '#47A025',
    secondaryOrange: '#F44708',
  },
  fontWeight: {
    // primaryFontWeight: 400,
    // secondaryFontWeight: 500,
    // otherFontWeight: 600,
  },
  fontSize: {
    // primaryFontSize: 16,
    // secondaryFontSize: 18,
  },
  padding: {
    sectionPadding: 50,
    containerPadding: 16,
  },
  // borderRadius: {
  // },
  deskContainerWidth: 1312,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
