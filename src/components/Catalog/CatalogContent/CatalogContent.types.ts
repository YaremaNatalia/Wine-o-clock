import { IWine } from "@/types/types";

export interface IProps {
  searchedWines?: IWine[];
  searchedCountriesList?: string[];
  searchedRegionsList?: string[];
}
