var express = require('express')
var router = express.Router()
var anagramRoutes = (require('../src/anagrams/anagram.router')).router

router.use(anagramRoutes)
exports.router = router