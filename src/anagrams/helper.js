function makeAnagrams(str) {
    // if string is of One char return
    if (str.length === 1) {
        return [str]
    }
    var result = [];
    var subResult = [];
    var staticChar;
    var remainAfter;
    var remainBefore;
    for (let index = 0; index < str.length; index++) {
        // static char will be our focus point will we swap all char other then static
        staticChar = str[index];
        remainBefore = str.substr(0, index)
        remainAfter = str.substr(index+1)
        // send back to function all the remaining char other then static char
        subResult = makeAnagrams((remainBefore + remainAfter))
        // loop over returned result with string with out the static char and concat them
        for (const subStr of subResult) {
            result.push(staticChar + subStr)
        }
    }
    return result;
}

function isAnagram(str1, str2, caseSensitive) {
    const sortedStr1 = str1.split('').sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join('')
    const sortedStr2 = str2.split('').sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join('')
    // if we want to return all anagram in original form with out case sensitive
    // const regex = new RegExp(sortedStr1, 'i')
    return sortedStr1 === sortedStr2
}

function findAnagrams(strArray, caseSensitive) {
    wordsArray = (strArray).map(j => {
        if (!caseSensitive) {
            return {word: j.toLowerCase(), visit: false}
        }
        return { word: j, visit: false }
    })
    const finalResult = []
    const finalWrongWords = []
    for (var index = 0; index < wordsArray.length; index++) {
        const respectedArray = []
        const word1 = wordsArray[index];
        if (!(/^[a-zA-Z]*$/).test(word1.word)) {
            finalWrongWords.push([word1.word])
            continue;
        }
        if (!word1.visit) {
            respectedArray.push(word1.word)
            word1.visit = true;
            for (var i = (index + 1); i < wordsArray.length; i++) {
                const word2 = wordsArray[i];
                const isValid = isAnagram(word1.word, word2.word, caseSensitive)
                if (isValid) {
                    respectedArray.push(word2.word)
                    word2.visit = true
                }
            }
            finalResult.push(respectedArray)
        }
    }
    return {
        anagrams: finalResult,
        wrongWords: finalWrongWords
    }
}

exports.helper = { makeAnagrams, isAnagram, findAnagrams}