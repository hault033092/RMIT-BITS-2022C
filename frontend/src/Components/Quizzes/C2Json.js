export const C2Json = {
    "title": "C2 vocabulary test",
    "showProgressBar": "bottom",
    "showTimerPanel": "top",
    "maxTimeToFinishPage": 10,
    "maxTimeToFinish": 25,
    "completedHtmlOnCondition": [{
      "expression": "{totalScore} > 8",
      "html":
        "You got {totalScore} out of {maxScore} points.</br></br>Congratulation! You did great!"
    }, {
      "expression": "{totalScore} > 6",
      "html":
        "You got {totalScore} out of {maxScore} points.</br></br>Well Done! <i>Your focus determines your reality.</i> And this is the way you passed the quiz."
    }, {
      "expression": "{totalScore} <= 2",
      "html":
        "You got {totalScore} out of {maxScore} points.</br></br><i>In my experience</i>, as Obi-Wan Kenobi said, <i>there's no such thing as luck.</i>"
    }],
    "pages": [{
      "name": "startPage",
      "elements": [{
        "type": "html",
        "name": "welcomeMsg",
        "html": "<b>Take this challenging quiz to find out if you have truly mastered Advanced English.</b></br></br><i>May Gandalf the Grey let you pass.</i></br><img src= 'https://media.tenor.com/EgvXcIbZLqgAAAAM/gandalf-the-grey-lord-of-the-rings.gif' width='100%' height='auto'/>\n"
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "question1",
        "title": "What does \"obsolete\" mean?",
        "choices": [ "old, archaic, no longer of use", "cutting-edge, futuristic", "modern, up-to-date", "none of the above" ],
        "correctAnswer": "old, archaic, no longer of use",
        "score": 2
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "question2",
        "score": 2,
        "title": "What is the correct word that describes \"a everyday native language of a country/region?\"",
        "correctAnswer": "vernacular",
        "choices": [{
          "value": "vernacular",
          "text": "vernacular"
        }, {
          "value": "idiom",
          "text": "idiom"
        }, {
          "value": "written language",
          "text": "written language"
        }]
      }]
    }, {
      "elements": [{
        "type": "rating",
        "name": "question3",
        "score": 2,
        "title": "Every which week(s) represent(s) a \"forthnight\"?",
        "correctAnswer": 2,
        "rateValues": [ 1, 2, 3, 4, 5 ]
      }]
    }, {
      "elements": [{
        "type": "boolean",
        "name": "question4",
        "score": 2,
        "title": "\"prudent\" and \"sagacious\" are synonyms.",
        "labelTrue": "True",
        "labelFalse": "False",
        "correctAnswer": true
      }]
    }, {"elements": [{
          "type": "imagepicker",
          "name": "animals",
          "title": "Which picture depicts a \"mongoose\"?",
          "isRequired": true,
          "correctAnswer": "this fearless bastard",
          "choices": [
            {
              "value": "lion",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
              "text": "This cute Big Cat"
            },
            {
              "value": "giraffe",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
              "text": "This Long Neck Boy"
            },
            {
              "value": "red-panda",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
              "text": "Shifu from Kung-fu Panda"
            },
            {
              "value": "mongoose",
              "imageLink": "https://www.treehugger.com/thmb/RFze1HHA5iSKi4chjZ4YrSWV36M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yellow-mongoose-portrait-01-4873d2399cb54ea48448b0bda37bda1e.jpg",
              "text": "This fearless bastard"
            }
          ],
          "showLabel": true,
          "multiSelect": false
        }]
    }
    ],
    "firstPageIsStarted": true
  };

  export default C2Json;