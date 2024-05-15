import { IWine } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

export interface IProps {
  wines: IWine[];
  resetForm: () => void;
  setWines: Dispatch<SetStateAction<IWine[]>>;
}