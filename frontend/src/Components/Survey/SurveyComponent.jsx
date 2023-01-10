import React from "react"
import { useCallback } from "react"
import "survey-core/defaultV2.css"

//import modern theme from survey js
import { StylesManager, Model } from "survey-core"
import { Survey } from "survey-react-ui"
//apply modern styled theme from modern css
StylesManager.applyTheme("defaultV2")

//add survey ID. After handshake, return survey ID as user ID
const SURVEY_ID = 1

const surveyJson = {
	logoPosition: "right",
	completedHtml:
		"<h3>Thank you for your time taking the Particeps Survey!</h3>",
	completedHtmlOnCondition: [
		{
			expression:
				"{question1} == 'Usually' || {question1} == 'Very often' || {question1} == 'Always. Whenever I want to'",
			html: "<h2>Thank you for your feedback</h2> <h3>You are a visual learner.</h3>",
		},
		{
			expression: "{question2} >= '40 minutes'",
			html: "<h2>Thank you for your feedback</h2> <h4>You are a text learner</h4>",
		},
	],
	elements: [
		{
			type: "radiogroup",
			name: "question1",
			title: "How clearly can you conjure images in your head when you read?",
			isRequired: true,
			choices: [
				"Not at all",
				"Somewhat",
				"Normal. Sometimes I can others I cannot",
				"Usually",
				"Very often",
				"Always. Whenever I want to",
			],
		},
		{
			name: "question2",
			title: "How long can you concentrate on the screen?",
			type: "radiogroup",
			isRequired: true,
			choices: [
				"10 minutes",
				"20 minutes",
				"30 minutes",
				"40 minutes",
				"50 minutes",
				"60 minutes or more",
			],
		},
		{
			name: "question3",
			title: "What kind of book would you like to read for fun?",
			type: "radiogroup",
			isRequired: true,
			choices: [
				"A book with lots of pictures in it",
				"A book with lots of words in it",
				"A book with word searches or crossword puzzles",
			],
		},
		{
			name: "question4",
			title: "When you are not sure how to spell a word, what are you most likely to do?",
			type: "radiogroup",
			isRequired: true,
			choices: [
				"Write it down to see if it looks right",
				"Spell it out loud to see if it sounds right",
				"Trace the letters in the air (finger spelling)",
			],
		},
		{
			name: "question5",
			title: ' When you see the word "cat," what do you do first?',
			type: "radiogroup",
			isRequired: true,
			choices: [
				"Picture a cat in your mind",
				'Say the word "cat" to yourself',
				"Think about being with a cat (petting it or hearing it purr)",
			],
		},
		{
			type: "imagepicker",
			name: "question6",
			title: "Among the 4 images below, which one seems like the best interface to learn from?",
			choices: [
				{
					value: "visualUI",
					imageLink:
						"https://i.pinimg.com/originals/49/b8/e5/49b8e5dc9b8e5b174e96b9c1c4b9232b.png",
				},
				{
					value: "visual-inclinedUI",
					imageLink:
						"https://assets.materialup.com/uploads/98b9965d-6121-4e68-9841-cd5653a34b64/dribbble.jpg",
				},
				{
					value: "hybridUI",
					imageLink:
						"https://ieltsfocus.com/wp-content/uploads/2017/12/reading-tips.png",
				},
				{
					value: "textUI",
					imageLink:
						"https://langgo.edu.vn/public/files/upload/default/images/ielts/tron-bo-10-de-thi-ielts-reading-test-download-mien-phi.jpg",
				},
			],
		},
	],
}

const SurveyComponent = () => {
	const survey = new Model(surveyJson)

	//Upon completing survey results, call for saveSurveyResults to save the data
	const surveyComplete = useCallback((sender) => {
		saveSurveyResults(
			"https://your-web-service.com/" + SURVEY_ID,
			sender.data
		)
	}, [])

	survey.onComplete.add(saveSurveyResults)

	//Define save Survey Results function
	function saveSurveyResults(url, json) {
		const request = new XMLHttpRequest()
		request.open("POST", url)
		request.setRequestHeader(
			"Content-Type",
			"application/json;charset=UTF-8"
		)
		request.addEventListener("load", () => {
			// Handle "load"
		})
		request.addEventListener("error", () => {
			// Handle "error"
		})
		request.send(JSON.stringify(json))
	}

	return <Survey model={survey} />
}

export default SurveyComponent
