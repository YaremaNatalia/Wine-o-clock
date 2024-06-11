import { IFilter } from "../Filter/Filter.types";


export interface IProps extends IFilter {
  onModalClose: () => void;
  title?: string;
}


