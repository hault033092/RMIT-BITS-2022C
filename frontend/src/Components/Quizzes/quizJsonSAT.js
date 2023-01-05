export const quizJsonSAT = {
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
        "title": "What does \"nocturnal\" mean?",
        "choices": [ "active during the day", "active during the night", "both", "none of the above" ],
        "correctAnswer": "active during the night",
        "score": 2
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "question2",
        "score": 2,
        "title": "What is the correct word that describes \"to prove something wrong\"?",
        "correctAnswer": "debunk",
        "choices": [{
          "value": "debunk",
          "text": "debunk"
        }, {
          "value": "reaffirm",
          "text": "reaffirm"
        }, {
          "value": "derive",
          "text": "derive"
        }]
      }]
    }, {
      "elements": [{
        "type": "rating",
        "name": "question3",
        "score": 2,
        "title": "Which number represents \"centennial\"?",
        "correctAnswer": 100,
        "rateValues": [ 50, 100, 200, 300, 400 ]
      }]
    }, {
      "elements": [{
        "type": "boolean",
        "name": "question4",
        "score": 2,
        "title": "\"regurgitate\" and \"disgorge\" are synonyms.",
        "labelTrue": "True",
        "labelFalse": "False",
        "correctAnswer": true
      }]
    }, {
      "elements": [{
        "type": "image",
        "name": "defenestration",
        "imageLink": "https://images.squarespace-cdn.com/content/v1/5a18683b64b05f9f4adeb4c7/1573751295270-GI2UFOQCYACMMRI2F5PT/defenestrations-of-prague-featured.jpg?format=1000w"
      }, {
        "type": "radiogroup",
        "name": "question5",
        "score": 2,
        "startWithNewLine": false,
        "title": "What is the word that best fit the action carried out in the picture?",
        "correctAnswer": "defenestration",
        "choices": [{
          "value": "cheers",
          "text": "cheers"
        }, {
          "value": "defenestration",
          "text": "defenestration"
        }, {
          "value": "toasting",
          "text": "toasting"
        }]
      }]
    }],
    "firstPageIsStarted": true
  };


export default quizJsonSAT