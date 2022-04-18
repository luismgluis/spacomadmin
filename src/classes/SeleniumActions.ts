export type SeleniumNativeAction =
  | "setInputValue"
  | "getInputValue"
  | "click"
  | "await"
  | "navigate"
  | "awaitRemove";

type SeleniumAction =
  | "navigate"
  | "await"
  | "inputUserLogin"
  | "inputPasswordLogin"
  | "click"
  | "getCurrentWifiPassword"
  | "setNewWifiName"
  | "setNewWifiPassword";

export type SeleniumStep = {
  domElement?: string;
  script?: string;
  action: SeleniumAction;
};
