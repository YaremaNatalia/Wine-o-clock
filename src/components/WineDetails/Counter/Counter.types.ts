import { Dispatch, SetStateAction } from "react";

export interface IProps {
  quantity: number;
  counterValue: number;
  setCounterValue: Dispatch<SetStateAction<number>>;
}
