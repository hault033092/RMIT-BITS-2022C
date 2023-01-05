import React from "react";

//import styles
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

//import json file
import { quizJson } from "./quizJson";

StylesManager.applyTheme("defaultV2");

function ReviewIELTSQuiz() {
    const survey = new Model(quizJson);
    survey.data = { question1 : "active during the day", question2 : "peripheral vision", question3: 200, question4: false, question5: "logging"};
    
    survey.mode = "display";
    survey.questionsOnPageMode = "singlePage";
    survey.showNavigationButtons = "none";
    survey.showProgressBar = "off";
    survey.showTimerPanel = "none";
    survey.maxTimeToFinishPage = 0;
    survey.maxTimeToFinish = 0;
    const correctStr = "Correct";
    const inCorrectStr = "Incorrect";
    
    function getTextHtml(text, str, isCorrect) {
        if (text.indexOf(str) < 0) return undefined;
        return text.substring(0, text.indexOf(str)) +  "<span class='" +  (isCorrect ? "correctAnswer" : "incorrectAnswer" ) + "'>" +  str + "</span>";
    }
    function isAnswerCorrect(q) {
        const right=q.correctAnswer;
        if(!right || q.isEmpty()) return undefined;
        var left=q.value;
        if(!Array.isArray(right)) return right == left;
        if(!Array.isArray(left)) left=[left];
        for(var i=0; i < left.length; i ++) {
            if(right.indexOf(left[i]) < 0) return false;
        }
        return true;
    }
    
    function renderCorrectAnswer(q) {
        if(!q) return;
        const isCorrect = isAnswerCorrect(q);
        if (!q.prevTitle) {
            q.prevTitle = q.title;
        }
        if(isCorrect === undefined) {
            q.title = q.prevTitle;
        }
        q.title =  q.prevTitle + ' ' + (isCorrect ? correctStr : inCorrectStr);
    }
    
    survey.onValueChanged.add((sender, options) => {
        renderCorrectAnswer(options.question);
    });
    
    survey.onTextMarkdown.add((sender, options) => {
        var text = options.text;
        var html = getTextHtml(text, correctStr, true);
        if (!html) {
            html = getTextHtml(text, inCorrectStr, false);
        }
        if (!!html) {
            options.html = html;
        }
    });
    
    survey.getAllQuestions().forEach(q => renderCorrectAnswer(q));
    return (<Survey model={survey} />);
}

export default ReviewIELTSQuiz;