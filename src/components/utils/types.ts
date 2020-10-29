export enum CurrencySymbols {
  BTC = "BTC",
  BCH = "BCH",
  DOTS = "DOTS",
  DOGE = "DOGE",
  ZEC = "ZEC",
  RENBTC = "RENBTC",
  RENBCH = "RENBCH",
  RENDOGE = "RENDOGE",
  RENZEC = "RENZEC",
  RENDGB = "RENDGB",
}

export type CurrencyType = keyof typeof CurrencySymbols;

export enum BridgeChain {
  BTCC = "BTCC",
  BNCC = "BNCC",
  ETHC = "ETHC",
}

export type ChainType = keyof typeof BridgeChain;

export type TransactionStatusType = "completed" | "pending" | "submitted";

export type WalletConnectionStatusType =
  | "disconnected"
  | "connecting"
  | "connected"
  | "wrong_network";

export enum FlowKind {
  MINT = "mint",
  RELEASE = "release",
}

export enum FlowStep {
  INITIAL = "initial",
  FEES = "fees",
  CONFIRMATION = "confirmation",
}
export type FlowStepType = keyof typeof FlowStep;
