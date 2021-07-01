import { valueToWei } from '../src'

test('valueToWei', () => {
    expect(valueToWei(52.4651516516456, 6)).toBe("52465151.651645")
})
