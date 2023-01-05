const quizJsonSAT = {
    "title": "SAT vocabulary test",
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
      "expression": "{totalScore} <= 4",
      "html":
        "You got {totalScore} out of {maxScore} points.</br></br><i>In my experience</i>, as Obi-Wan Kenobi said, <i>there's no such thing as luck.</i>"
    }],
    "pages": [{
      "name": "startPage",
      "elements": [{
        "type": "html",
        "name": "welcomeMsg",
        "html": "<b>Take this challenging quiz to find out how well you know your IELTS words.</b></br></br><i>May the IELTS gods be with you.</i></br><img src= https://media.tenor.com/oBUzdVQLHV8AAAAd/beerus.gif width='100%' height='auto'/>\n"
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "question1",
        "title": "What does \"diurnal\" mean?",
        "choices": [ "active during the day", "active during the night", "both", "none of the above" ],
        "correctAnswer": "active during the day",
        "score": 2
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "question2",
        "score": 2,
        "title": "What is the correct word that describes \"a type of vision at the edge of one's eyes\"",
        "correctAnswer": "peripheral vision",
        "choices": [{
          "value": "peripheral vision",
          "text": "peripheral vision"
        }, {
          "value": "central vision",
          "text": "central vision"
        }, {
          "value": "shortsighted vision",
          "text": "shortsighted vision"
        }]
      }]
    }, {
      "elements": [{
        "type": "rating",
        "name": "question3",
        "score": 2,
        "title": "Which number represents \"bicentennial\"?",
        "correctAnswer": 200,
        "rateValues": [ 50, 100, 200, 300, 400 ]
      }]
    }, {
      "elements": [{
        "type": "boolean",
        "name": "question4",
        "score": 2,
        "title": "\"alleviate\" and \"aggrevate\" are synonyms.",
        "labelTrue": "True",
        "labelFalse": "False",
        "correctAnswer": false
      }]
    }, {
      "elements": [{
        "type": "image",
        "name": "logging",
        "imageLink": "https://www.arachnys.com/wp-content/uploads/2021/07/logging-1200x900.jpg"
      }, {
        "type": "radiogroup",
        "name": "question5",
        "score": 2,
        "startWithNewLine": false,
        "title": "What is the picture depicting?",
        "correctAnswer": "logging",
        "choices": [{
          "value": "deforestation",
          "text": "deforestation"
        }, {
          "value": "logging",
          "text": "logging"
        }, {
          "value": "replanting trees",
          "text": "replanting trees"
        }]
      }]
    }],
    "firstPageIsStarted": true
  };


export default quizJsonSAT