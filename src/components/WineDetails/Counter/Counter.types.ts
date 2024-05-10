export interface IProps {
  quantity: number;
  counterValue: number;
  onCounterChange: (newValue: number) => void;
}
