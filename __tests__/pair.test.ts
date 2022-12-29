import * as Pairs from '../src/pairs';

describe('Test for pairs', () => {
    test('sample1', () => {
        let pair = new Pairs.Pair( "key1", "value1" );
        expect( pair.getKey() ).toBe( "key1" );
        expect( pair.getValue() ).toBe( "value1" );
    });
});
