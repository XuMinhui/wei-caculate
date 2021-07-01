import { BigNumber } from "bignumber.js";
BigNumber.config({ EXPONENTIAL_AT: [-30, 30] })

type argType = string | number | BigNumber

export type WeiProps<T> = (
    arg: argType,
    decimal: number,
    fixed?: number,
) => T

export type DualWeiProps<T> = (
    arg1: argType,
    arg2: argType,
    fixed?: number
) => T