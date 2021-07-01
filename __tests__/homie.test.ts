import { valueToWei, weiToValue } from '../src'

test('valueToWei', () => {
    expect(valueToWei(52.4651516516456, 6)).toBe("52465151.6516")
    expect(valueToWei(1, 6)).toBe("1000000")
})

test('weiToValue', () => {
    expect(weiToValue(100000000, 6)).toBe("100")
    expect(weiToValue(200, 6)).toBe("0.0002")
})
