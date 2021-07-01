# wei-caculate

## Quick Start

Installation package

```shell
npm i wei-caculate -S
```

Just export the function directly from the library and use it

```ts
import { valueToWei } from 'wei-caculate'

const wei = valueToWei(1, 18)

consle.log(wei) // 1000000000000000000
```

## Parameter Analysis

Since most project-based tools for blockchain calculations involve precision-related calculations, they all default to discarding the remainder all together after the exact bit, rather than rounding up

| Parameters | Type                          | Default Value | Explanation                                                  |
| ---------- | ----------------------------- | ------------- | ------------------------------------------------------------ |
| arg        | number \| string \| Bignumber | /             | Pass in a custom target value                                |
| decimals   | number                        | /             | Enter the precision to be offset                             |
| fixed      | number                        | 4             | The final result is accurate to the number of decimal places, and if there are not enough places, the actual value will prevail. |

## Method

### valueToWei

**Function Definition**

```ts
fn: ( 
    arg: number | string | Bignumber,
    decimals: number
    fixed?: number
) => string
```

**Example**

```ts
import { valueToWei } from 'wei-caculate'

const wei = valueToWei(1, 18)
const wei2 = valueToWei(52.4651516516456, 6)

consle.log(wei) // 1000000000000000000
consle.log(wei2) // 52465151.6516
```

### valueFromWei

**Function Definition**

```ts
fn: ( 
    arg: number | string | Bignumber,
    decimals: number
    fixed?: number
) => string
```

**Example**

```ts
import { valueFromWei } from 'wei-caculate'

const val = valueFromWei(1000000000000000000, 18)
const val2 = valueFromWei(52465151.6516, 6)

consle.log(val) // 1
consle.log(val) // 52.4651516516456
```

### weiAdd

**Function Definition**

```ts
fn: ( 
    arg1: number | string | Bignumber,
    arg2: number | string | Bignumber,
    fixed?: number
) => string
```

**Example**

```ts
import { weiAdd } from 'wei-caculate'

const val = weiAdd(100, "1")

consle.log(val) // 101
```

### weiSub

**Function Definition**

```ts
fn: ( 
    arg1: number | string | Bignumber,
    arg2: number | string | Bignumber,
    fixed?: number
) => string
```

**Example**

```ts
import { weiSub } from 'wei-caculate'

const val = weiSub(100, "1")

consle.log(val) // 99
```

### weiMul

**Function Definition**

```ts
fn: ( 
    arg1: number | string | Bignumber,
    arg2: number | string | Bignumber,
    fixed?: number
) => string
```

**Example**

```ts
import { weiMul } from 'wei-caculate'

const val = weiMul(0.6, "3")

consle.log(0.6 * 3) // 1.7999999999999998
consle.log(val) // 1.8
```

### weiDiv

**Function Definition**

```ts
fn: ( 
    arg1: number | string | Bignumber,
    arg2: number | string | Bignumber,
    fixed?: number
) => string
```

**Example**

```ts
import { weiDiv } from 'wei-caculate'

const val = weiDiv(99, "33")

consle.log(val) // 3
```

### 