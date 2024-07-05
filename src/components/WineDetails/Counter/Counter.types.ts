import { Dispatch, SetStateAction } from "react";

export interface IProps {
  basket?: boolean;
  quantity: number;
  counterValue: number;
  setCounterValue: Dispatch<SetStateAction<number>>;
}
