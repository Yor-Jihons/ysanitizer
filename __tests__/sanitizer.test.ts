import * as Sanitizers from '../src/sanitizer';

describe('Test for sanitizer', () => {
    test('sample1', () => {
        expect( Sanitizers.sanitize( "<test>1</test>" ) ).toBe( "&lt;test&gt;1&lt;/test&gt;" );
    });
});
