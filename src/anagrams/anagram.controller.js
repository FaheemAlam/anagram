const helper = require('./helper').helper
class Anagram {
    constructor() {
      }
  
    get (req, res) {
        var queryParams = req.query;
        if (!queryParams || !queryParams.words) {
            res.json([])
        }
        try {
            var wordsArray = (queryParams.words).split(',')
            const finalResult = []
            const finalWrongWords = []
            wordsArray.forEach(word => {
                if (!(/^[a-zA-Z]*$/).test(word)) {
                    finalWrongWords.push([word])
                } else {
                    finalResult.push(helper.makeAnagrams(word))
                }
            });
            res.json({
                anagrams: finalResult,
                wrongWords: finalWrongWords
            })    
        } catch (error) {
            throw error
        }
    }
    findAnagramsV1 (req, res) {
        var queryParams = req.query;
        if (!queryParams || !queryParams.words) {
            res.json([])
        }
        try {
            var wordsArray = (queryParams.words).split(',')
            res.json(helper.findAnagrams(wordsArray, false))    
        } catch (error) {
            throw error
        }
    }
    findAnagramsV2 (req, res) {
        var queryParams = req.query;
        if (!queryParams || !queryParams.words) {
            res.json([])
        }
        try {
            var wordsArray = (queryParams.words).split(',')
            res.json(helper.findAnagrams(wordsArray, true))    
        } catch (error) {
            throw error
        }
    }
  }
  
  module.exports = Anagram;