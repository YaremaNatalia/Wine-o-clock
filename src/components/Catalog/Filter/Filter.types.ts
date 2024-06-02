import { IWine } from "@/types/types";

export interface IFilter {
  wines: IWine[];
  onFilter: (wines: IWine[]) => void;
}