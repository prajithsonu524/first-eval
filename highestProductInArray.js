
//const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];

const highestProductInArray = (words) => {
    //validate if all elements are strings

    if (words.length === 0) {
        return 0;
    }
    if (words.some(word => typeof word != 'string')) {
        return 'All elements must be strings';
    }

    words.sort((a, b) => b.length - a.length);
    for (var i = 0; i < words.length - 1; i++) {
        for (var j = i + 1; j < words.length; j++) {
            var flag = false;
            for (var k = 0; k < words[i].length; k++) {
                if (words[j].includes(words[i][k])) {
                    flag = true;
                    break;
                }
            }
            if (!flag) return words[i].length * words[j].length;
        }
    }
    return 0;

};

module.exports = highestProductInArray;