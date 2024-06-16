import { NextRouter } from "next/router";
import { CSSProperties, ReactNode } from "react";

export type MenuItem = {
  key: string;
  text: string;
  path?:string;
  Icon(props:{sx:CSSProperties}):JSX.Element;
  action?(router: NextRouter,storeActions?:any): void;
  childrens?: Array<{
    key: string;
    text: string;
    path:string;
    Icon(props:{sx:CSSProperties}):JSX.Element;
    action(router: NextRouter): void;
  }>;
};
