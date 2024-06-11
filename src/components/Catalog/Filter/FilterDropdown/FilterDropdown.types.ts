import { IOption } from "@/types/types";

export interface IProps {
  options?: IOption[];
  title?: string;
  value?: string;
  onChange: (value: string) => void;
}
