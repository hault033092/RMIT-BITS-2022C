import React from "react";

//import styles
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

//import json file
import { C2Json } from "./C2Json";

StylesManager.applyTheme("defaultV2");

function ReviewC2Quiz() {
    const survey = new Model(C2Json);
    survey.data = { question1 : "old, archaic, no longer of use", question2 : "vernacular", question3: 2, question4: true, question5: "this fearless bastard"};
    
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

export default ReviewC2Quiz;