import React from 'react'
import { useCallback } from 'react';
import 'survey-core/defaultV2.css';
//import modern theme from survey js
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
//apply modern styled theme from modern css
StylesManager.applyTheme("defaultV2")

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const surveyJson = {
  elements: [{
    name: "Hyperactiveness",
    title: "On a scale of 1 to 10, how hyperactive are you?",
    type: "rating",
    "isRequired": true,
     "rateMin": 0,
     "rateMax": 10
  }, {
    name: "Concentration",
    title: "How long can you concentrate on the screen?",
    type: "checkbox",
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
    name: "preference",
    title: "On a scale of 1 to 5, 1 being unlikely and 5 being likey, how much do you prefer to learn via videos or text?",
    type: "rating",
    "isRequired": true,
    "ratemin": 0,
    "ratemax": 10
  }
]
}

const SurveyPage = () => {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default SurveyPage
