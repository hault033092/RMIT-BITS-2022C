import React from 'react'
import { quizJson } from './quizJson.js';
//import surveyjs styles
import { Serializer } from "survey-core";
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

//apply theme
StylesManager.applyTheme("defaultV2");

// Add a custom `score` property to survey questions
Serializer.addProperty("question", {
    name: "score:number"
    }
);

const IELTSquiz = () => {
    const survey = new Model(quizJson);
    function calculateMaxScore (questions) {
      var maxScore = 0;
      questions.forEach((question) => {
        if (!!question.score) {
          maxScore += question.score;
        }
      });
      return maxScore;
    }
    function calculateTotalScore (data) {
      var totalScore = 0;
      Object.keys(data).forEach((qName) => {
        const question = survey.getQuestionByValueName(qName);
        if (question.isAnswerCorrect()) {
          if (!!question.score) {
            totalScore += question.score;
          }
        }
      });
      return totalScore;
    }
    survey.onComplete.add((sender) => {
      const totalScore = calculateTotalScore(sender.data);
      const maxScore = calculateMaxScore(sender.getAllQuestions());
      
      // Save the scores in survey results
      sender.setValue("maxScore", maxScore);
      sender.setValue("totalScore", totalScore);
    });
    return (<Survey model={survey} />);
}

export default IELTSquiz