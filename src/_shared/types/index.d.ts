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

export type ISize = 5 | 10 | 50;

export type IDuration = 3 | 6 | 12;

export interface IPlan {
  size: ISize;
  duration: IDuration;
  upfrontPayment: boolean;
  pricePerGB?: number;
}

export interface IPaymentInfo {
  email?: string;
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}

export interface IReduxSate {
  plan: IPlan;
  settings: ISettings;
  paymentInfo: IPaymentInfo;
}

export interface IPlanServerResponse {
  duration_months: IDuration;
  price_usd_per_gb: number;
}

export interface IPlansServerResponse {
  subscription_plans: IPlanServerResponse[];
}
