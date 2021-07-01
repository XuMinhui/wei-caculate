import { BigNumber } from "bignumber.js";

export type WeiProps<T> = (
    arg: string | number | BigNumber,
    decimal: number,
    fixed?: number,
) => T
