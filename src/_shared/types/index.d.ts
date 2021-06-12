import "styled-components";

export interface Theme {
  primary: string;
  surface: string;
  textColor: string;
  backgroundColor: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
