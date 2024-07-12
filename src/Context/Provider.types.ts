import { IWine } from "@/types/types";
import { ReactNode } from "react";

export interface IBasketContext {
  basketWines: IWine[];
  setBasketWines: (wines: IWine[]) => void;
}

export interface IFavoritesContext {
  favoritesWines: IWine[];
  setFavoritesWines: (wines: IWine[]) => void;
}

export interface IProps {
  children: ReactNode;
}