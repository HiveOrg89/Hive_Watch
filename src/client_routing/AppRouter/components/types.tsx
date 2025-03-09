import { Dispatch } from "@reduxjs/toolkit";
import { ReactNode, SetStateAction } from "react";

export interface RouteProps {
  children?: ReactNode;
  element?: ReactNode;
  index?: boolean;
  path: string;
  componentID?: string;
  action?: () => Promise<void>;
  visited?: boolean;
}

export interface RouteEntry extends RouteProps {}

export interface AppRouterProps {
  children: ReactNode;
}

export type Location = {
  key: string;
  pathname: string;
  search: Object;
  pathnamewithsearch: string;
};

export interface AppRouterContextProps {
  location: Location;
  isFetching: boolean;
  setIsFetching: React.Dispatch<SetStateAction<boolean>>;
  targetRoute: string;
  setTargetRoute: React.Dispatch<SetStateAction<string>>;
  persist: boolean;
}

export interface ComponentContextProps {
  componentChildren: ReactNode;
  parentPath: string;
  params: { [key: string]: string };
  isHidden: boolean;
  // setParams: React.Dispatch<SetStateAction<{ [key: string]: string }>>;
}

interface InitialValueProps {
  componentChildren?: ReactNode;
  parentPath: string;
  params: { [key: string]: string };
  isHidden: boolean;
}

export interface ComponentProviderProps {
  children: ReactNode;
  initialValue: InitialValueProps;
}
