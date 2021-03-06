# anagram
simple note project to check anagram

# API
- ### http://localhost:3000/anagrams?words=Top,123ff
    Above **GET** Url will accept the query params as CSV words and return an Object of possible anagrams for the word
    ```javascript
    {
        "anagrams": [
            [
                "Top",
                "Tpo",
                "oTp",
                "opT",
                "pTo",
                "poT"
            ]
        ],
        "wrongWords": [
            [
                "123ff"
            ]
        ]
    }
    ```
- ### http://localhost:3000/v1/anagrams?words=ate,bar,loop,Pool,TEA,pet,BAR
 Above **GET** URL will accept a CSV words as query params and return all the possible anagrams with in the string
 ```javascript
{
    "anagrams": [
        [
            "ate",
            "tea"
        ],
        [
            "bar",
            "bar"
        ],
        [
            "loop",
            "pool"
        ],
        [
            "pet"
        ]
    ],
    "wrongWords": []
}
```
- ### http://localhost:3000/v2/anagrams?words=ate,bar,loop,Pool,TEA,pet,BAR
    Above **GET** URL will accept a CSV words as query params and return all the possible anagrams with in the string (case Sensitive)
 ```javascript
{
    "anagrams": [
        [
            "pot",
            "opt"
        ],
        [
            "Top"
        ],
        [
            "owl"
        ],
        [
            "Low",
            "owL"
        ]
    ],
    "wrongWords": []
}
``` 
