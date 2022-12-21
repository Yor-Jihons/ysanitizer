/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ysanitizer/blob/main/ysanitizer/LICENSE
*/


import * as Sanitizers from "./sanitizer";


// ---------------------------------------------------
// HTMLからも使えるようにする


// 1. The inteface definition so that the users can use.
interface YSanitizers{
    sanitize( target:string ): string;
}

// 2. Add (1) into the global.window. (window.[...] = ... の左辺)
declare global {
    interface Window {
        YSanitizers: YSanitizers;
    }
}

const YSanitizers: YSanitizers = (() =>{
    return {
        /**
        * Sanitize the string.
        * @param target The string you want to sanitize.
        * @returns The string sanitized.
        */
        sanitize: ( target:string ): string => {
            return Sanitizers.sanitize( target );
        }
    };
})();

// 4. Add the intefaces.
window.YSanitizers = YSanitizers;


// ---------------------------------------------------
