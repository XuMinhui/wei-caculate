import { BigNumber } from "bignumber.js";
import { WeiProps } from "./types";

export const valueToWei: WeiProps<string> = (arg, decimals, fixed = 4) => {
  const _arg = new BigNumber(arg)
  return _arg.shiftedBy(decimals).dp(fixed, 1).toString()
}
