import React from 'react'
import quizJson from './quizJson';
//import surveyjs styles
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
StylesManager.applyTheme("defaultV2");

const IELTSquiz = () => {
    const survey = new Model(quizJson)
    survey.startTimer();
    survey.stopTimer();

    return  <Survey model={survey}/>
}

export default IELTSquiz