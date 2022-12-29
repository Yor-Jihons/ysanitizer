import * as PairLists from '../src/pairlists';
import * as Pairs from '../src/pairs';

describe('Test for pairlists', () => {
    test('sample1', () => {
        let pairList = new PairLists.PairList();
        let p1 = new Pairs.Pair( "k1", "v1" );
        let p2 = new Pairs.Pair( "k2", "v2" );
        let p3 = new Pairs.Pair( "k3", "v3" );
        pairList.add( p1 );
        pairList.add( p2 );
        pairList.add( p3 );

        expect( pairList.length() ).toBe( 3 );
        expect( pairList.at(1) ).toBe( p2 );
    });

    test('sample2', () => {
        let pairList = PairLists.createPairList();
        expect( pairList.length() ).toBe( 5 );
        expect( pairList.at( 0 ).getKey() ).toBe( "&" );
        expect( pairList.at( 0 ).getValue() ).toBe( "&amp;" );
        expect( pairList.at( 1 ).getKey() ).toBe( "<" );
        expect( pairList.at( 1 ).getValue() ).toBe( "&lt;" );
        expect( pairList.at( 2 ).getKey() ).toBe( ">" );
        expect( pairList.at( 2 ).getValue() ).toBe( "&gt;" );
        expect( pairList.at( 3 ).getKey() ).toBe( '"' );
        expect( pairList.at( 3 ).getValue() ).toBe( "&quot;" );
        expect( pairList.at( 4 ).getKey() ).toBe( "'" );
        expect( pairList.at( 4 ).getValue() ).toBe( "&#039;" );
    });
});
