const highestProductInArray = require('./highestProductInArray');

describe('Higest product of word length in array of words', () => {
    it('returns the highest product of two words in an array', () => {
        const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
        expect(highestProductInArray(words)).toEqual(16);
        // const words1 = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef', 'abcw', 'baz', 'foo', 'abcdef'];
        // expect(highestProductInArray(words1)).toEqual(24);
    });
    it('returns 0 if no words are found', () => {
        const words = ['abcw', 'abcw', 'abcw', 'abcw', 'abcw', 'abcw'];
        expect(highestProductInArray(words)).toEqual(0);
    });
    it('returns false if any element is not a string', () => {
        const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 123];
        expect(highestProductInArray(words)).toEqual('All elements must be strings');
        const wordsq = ['abcw', 'baz', 'foo', 'bar', 'xtfn', ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']];
        expect(highestProductInArray(wordsq)).toEqual('All elements must be strings');

    });

    it('returns 0 if a null arrray is passed', () => {
        const words = null;
        expect(highestProductInArray(words)).toEqual(0);
    });
});
