import React from 'react'
import { useCallback } from 'react';
import 'survey-core/defaultV2.css';

//import modern theme from survey js
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
//apply modern styled theme from modern css
StylesManager.applyTheme("defaultV2")

//add survey ID. After handshake, return survey ID as user ID
const SURVEY_ID = 1;

const surveyJson = {
  "logoPosition": "right",
  "completedHtml": "<h3>Thank you for your time taking the Particeps Survey!</h3>",
  "completedHtmlOnCondition": [
  {
   "expression": "{Hyperactiveness} >= 6",
   "html": "<h2>Thank you for your feedback</h2> <h3>You are a visual learner.</h3>"
  },
  {
   "expression": "{Hyperactiveness} <= 5",
   "html": "<h2>Thank you for your feedback</h2> <h4>You are a text learner</h4>"
  }
 ],
  elements: [ {
    "type": "rating",
    "name": "question1",
    "title": "On a scale of 1 to 5, 1 being not being able to at all and 10 being complete capable of visualize reading passages, how clearly can you conjure images in your head when you read?",
    "isRequired": true,
    "minimumRateDescription": "Not Capable",
    "maximumRateDescription": "Completely capable",
  }, {
    "name": "question2",
    "title": "How long can you concentrate on the screen?",
    "type": "radiogroup",
    "isRequired": true,
    "choices": [
      "10 minutes",
      "20 minutes",
      "30 minutes",
      "40 minutes",
      "50 minutes",
      "60 minutes or more"
     ]
  },
  {
    "name": "question3",
    "title": "What kind of book would you like to read for fun?",
    "type": "radiogroup",
    "isRequired": true,
    "choices": [
      "A book with lots of pictures in it",
      "A book with lots of words in it",
      "A book with word searches or crossword puzzles",
     ]
  },
  {
    "name": "question4",
    "title": "When you are not sure how to spell a word, what are you most likely to do?",
    "type": "radiogroup",
    "isRequired": true,
    "choices": [
      "Write it down to see if it looks right",
      "Spell it out loud to see if it sounds right",
      "Trace the letters in the air (finger spelling)",
     ]
  },
  {
    name: "question5",
    title: " When you see the word \"cat,\" what do you do first?",
    type: "radiogroup",
    "isRequired": true,
    "choices": [
      "Picture a cat in your mind",
      "Say the word \"cat\" to yourself",
      "Think about being with a cat (petting it or hearing it purr)",
     ]
  },
  {
    "type": "imagepicker",
    "name": "question6",
    "title": "Among the 4 images below, which one seems like the best interface to learn from?",
    "choices": [
     {
      "value": "visualUI",
      "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
     },
     {
      "value": "visual-inclinedUI",
      "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
     },
     {
      "value": "hybridUI",
      "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
     },
     {
      "value": "textUI",
      "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
     }
    ]
  }
]
}

const SurveyComponent = () => {
  const survey = new Model(surveyJson);

  //Upon completing survey results, call for saveSurveyResults to save the data 
  const surveyComplete = useCallback((sender) => {
    saveSurveyResults(
      "https://your-web-service.com/" + SURVEY_ID,
      sender.data
    )
  }, []);

  survey.onComplete.add(saveSurveyResults);

  //Define save Survey Results function
  function saveSurveyResults(url, json) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.addEventListener('load', () => {
      // Handle "load"
    });
    request.addEventListener('error', () => {
      // Handle "error"
    });
    request.send(JSON.stringify(json));
  }


  return <Survey model={survey} />
}

export default SurveyComponent
