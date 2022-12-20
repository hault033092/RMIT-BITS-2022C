import React from 'react'
import { useCallback } from 'react';
import 'survey-core/modern.min.css';
//import modern theme from survey js
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
//apply modern styled theme from modern css
StylesManager.applyTheme("modern")

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
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
