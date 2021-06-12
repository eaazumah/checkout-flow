import "styled-components";

export interface OppositTheme {
  primary: string;
  surface: string;
  textColor: string;
  backgroundColor: string;
}

export interface Theme {
  primary: string;
  surface: string;
  textColor: string;
  backgroundColor: string;
  opposite: OppositTheme;
}

export interface OppositTheme {
  primary: string;
  surface: string;
  textColor: string;
  backgroundColor: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export interface ISettings {
  theme: "dark" | "light";
}

export interface IReduxSate {
  settings: ISettings;
}
