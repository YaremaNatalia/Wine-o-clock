declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    whiteColor: string;
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
  // padding: {  };
  // deskContainerWidth: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    whiteColor: '#fff',
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
  // padding: {

  // },
  // borderRadius: {
  // },
  // deskContainerWidth: 1216,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
