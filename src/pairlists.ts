/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ysanitizer/blob/main/ysanitizer/LICENSE
*/

import * as Pairs from "./pairs";


/**
* The class to manage the objects of the clas Pair.
*/
export class PairList{
    /**
    * The array of the class Pair.
    */
    private _pairs: Pairs.Pair[];

    /**
    * Constructor.
    */
    constructor(){
        this._pairs = new Array();
    }

    /**
    * Add the object to manage.
    * @param pair The object of the class Pair.
    */
    add( pair: Pairs.Pair ): void{
        this._pairs[ this._pairs.length ] = pair;
    }

    /**
    * Get the length of the array which managed.
    * @returns Th length of the array which managed.
    */
    length(): number{
        return this._pairs.length;
    }

    /**
    * Get the length of the array which managed.
    * @returns Th length of the array which managed.
    */

    /**
    * Get the object of the class Pair which places in the array.
    * @param index 
    * @returns The object of the class Pair which places in the array.
    */
    at( index:number ): Pairs.Pair{
        return this._pairs[index];
    }
};

/**
* Create the object of the class PairList.
* @returns the object of the class PairList.
*/
export function createPairList(){
    let list = new PairList();
    list.add( new Pairs.Pair( "&", "&amp;" ) );
    list.add( new Pairs.Pair( "<", "&lt;" ) );
    list.add( new Pairs.Pair( ">", "&gt;" ) );
    list.add( new Pairs.Pair( '"', "&quot;" ) );
    list.add( new Pairs.Pair( "'", "&#039;" ) );
return list;
};

