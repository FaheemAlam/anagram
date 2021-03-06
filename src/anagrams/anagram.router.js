var express = require('express')
const router = express.Router()
const Anagram = require('./anagram.controller')
const controller = new Anagram();

router.route('/anagrams')
.get(controller.get)
router.route('/v1/anagrams')
.get(controller.findAnagramsV1)
router.route('/v2/anagrams')
.get(controller.findAnagramsV2)

exports.router = router
