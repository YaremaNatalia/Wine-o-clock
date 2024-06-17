export interface IProps {
  register: (name: string) => void;
  reset: () => void;
  priceValues: [number, number];
  setPriceValues: (value: [number, number]) => void;
}
export interface StyledTrackProps {
  index: number;
  theme?: {
    colors: {
      decorativeLightGrey: string;
      primaryBurgundy: string;
    };
  };
}
