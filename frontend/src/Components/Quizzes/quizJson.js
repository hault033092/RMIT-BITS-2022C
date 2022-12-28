import React from 'react'

const quizJson = {
    showTimerPanel: "top",
    showTimerPanelMode: "all",
    showProgressBar: "bottom",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    startSurveyText: "Start Quiz",
    title: "IELTS vocabulary",
    pages: [{
        elements: [{
            type: "radiogroup",
            name: "environmentVocab1",
            title: "What is the synonym of \"inhabit\"",
            choices: [
                "occupy", "migrate", "decease", "remove"
            ],
            correctAnswer: "occupy"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "environmentalVocab2",
            title: "What word describes the action of cutting down trees for commercial purposes ?",
            choicesOrder: "random",
            choices: [
                "deforestation", "fell", "logging", "incur"
            ],
            correctAnswer: "logging"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "EnvironmentalVocab3",
            title: "What is a \bdiurnal animal?",
            choicesOrder: "random",
            choices: [
                "An animal that lives and be active during the night",
                "An animal that lives and be active during the day",
                "An animal that sleeps during the day",
                "An animal that sleeps during the night"
            ],
            correctAnswer: "An animal that lives and be active during the day"
        }]
    },
        {
        elements: [{
            type: "radiogroup",
            name: "EnvironmentalVocab4",
            title: "What is the antonym of \"diurnal\"",
            choicesOrder: "random",
            choices: [
                "nocturnal",
                "aquatic",
                "extraterrestial",
                "marine"
            ],
            correctAnswer: "nocturnal"
        }]
    }], 
    completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    completedHtmlOnCondition: [{
    expression: "{correctAnswers} == 0",
    html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
  }, {
    expression: "{correctAnswers} == {questionCount}",
    html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
  }]
}


export default quizJson