import { BigNumber } from "bignumber.js";
import { DualWeiProps, WeiProps } from "./types";
import { FIXED } from './config'

export const valueToWei: WeiProps<string> = (arg, decimals, fixed = FIXED) => {
    const _arg = new BigNumber(arg)
    return _arg.shiftedBy(decimals).dp(fixed, 1).toString()
}

export const valueFromWei: WeiProps<string> = (arg, decimals, fixed = FIXED) => {
    const _arg = new BigNumber(arg)
    return _arg.shiftedBy(-decimals).dp(fixed, 1).toString()
}

export const weiAdd: DualWeiProps<string> = (arg1, arg2, fixed = FIXED) => {
    const _arg1 = new BigNumber(arg1)
    const _arg2 = new BigNumber(arg2)
    return _arg1.plus(_arg2).dp(fixed, 1).toString()
}

export const weiMul: DualWeiProps<string> = (arg1, arg2, fixed = FIXED) => {
    const _arg1 = new BigNumber(arg1)
    const _arg2 = new BigNumber(arg2)
    return _arg1.times(_arg2).dp(fixed, 1).toString()
}

export const weiSub: DualWeiProps<string> = (arg1, arg2, fixed = FIXED) => {
    const _arg1 = new BigNumber(arg1)
    const _arg2 = new BigNumber(arg2)
    return _arg1.minus(_arg2).dp(fixed, 1).toString()
}

export const weiDiv: DualWeiProps<string> = (arg1, arg2, fixed = FIXED) => {
    const _arg1 = new BigNumber(arg1)
    const _arg2 = new BigNumber(arg2)
    return _arg1.div(_arg2).dp(fixed, 1).toString()
}
