const quizJsonSAT = {
    showTimerPanel: "top",
    showTimerPanelMode: "all",
    showProgressBar: "bottom",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    startSurveyText: "Start Quiz",
    title: "SAT vocabulary",
    pages: [{
        elements: [{
            type: "radiogroup",
            name: "question1",
            title: "What is an antonym of \"abase?\"",
            choices: [
                "humble", "uplift", "humiliate", "demean"
            ],
            correctAnswer: "uplift"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "question2",
            title: "Which of the following words collocates with \"waiting\"?",
            choicesOrder: "random",
            choices: [
                "interminable", "foul", "idle", "deceased"
            ],
            correctAnswer: "interminable"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "question3",
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
            name: "question4",
            title: "What is a synonym of \"alleviate\"",
            choicesOrder: "random",
            choices: [
                "lessen",
                "worsen",
                "increase",
                "aggravate"
            ],
            correctAnswer: "lessen"
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


export default quizJsonSAT