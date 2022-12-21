/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ysanitizer/blob/main/ysanitizer/LICENSE
*/


/**
* The class to make pair, with a key and a value.
*/
export class Pair{
    /**
    * The key which is a string before coverted.
    */
    private _key:string;

    /**
    * The value which is a string after coverted.
    */
    private _value:string;
    constructor( key:string, value:string ){
        this._key   = key;
        this._value = value;
    }

    /**
    * Get the key which is a string before coverted.
    * @returns the key which is a string before coverted.
    */
    getKey(): string{
        return this._key;
    }

    /**
    * Get the value which is a string after coverted.
    * @returns the value which is a string after coverted.
    */
    getValue(): string{
        return this._value;
    }
};
