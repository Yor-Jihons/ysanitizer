/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ysanitizer/blob/main/ysanitizer/LICENSE
*/

import * as Pairs from "./pairs";
import * as PairLists from "./pairlists";


/**
* Sanitize the string.
* @param target The string you want to sanitize.
* @returns The string sanitized.
*/
export function sanitize( target:string ): string{
    let pairList:PairLists.PairList = PairLists.createPairList();

    let ret = target;

    for( let i:number = 0; i < pairList.length(); i++ ){
        let pair:Pairs.Pair = pairList.at( i );
        ret = ret.split( pair.getKey() ).join( pair.getValue() );
    }
return ret;
};
