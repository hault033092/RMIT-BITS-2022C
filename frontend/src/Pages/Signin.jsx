import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CurrentUserContext } from "../context/CurrentUser";
import jwt from "jwt-decode";

/* Components */
import Input from "../Components/Account/Input";
import Button from "../Components/Button";
import AccPageTemplate from "../Components/Account/AccPageTemplate";

/* Styled Components */
const StyledText = styled.p`
	color: black;
	font-size: 1vw;
	text-decoration: underline;
	padding-top: 5%;
	cursor: pointer;
	transition: 0.25s ease-in-out;
	&:hover {
		color: red;
		font-size:1.2vw;
		text-decoration: overline;
	}
`;

const StyledForm = styled.form`
	width: 100%;
`;

const ValidationMessage = styled.p`
	align-items: flex-start;
	width: 100%;
	font-size: 1vw;
	font-weight: 400;
	margin: 5px;
	color: ${props => props.color};
`;

/* utility Function */
const removeWhitespace = text => {
	const regex = /\s/g;
	return text.replace(regex, "");
};

const validateStudentEmail = email => {
	const regex = /^(\w+\d+)@rmit.edu.vn$/;
	return regex.test(email);
};

/* Data */
const client = axios.create({
	baseURL: "http://localhost:8080/api/user/login",
});

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [isSpinner, setIsSpinner] = useState(false);

	const { setCurrentUser } = useContext(CurrentUserContext);

	const navigation = useNavigate();

	useEffect(() => {
		setIsValid(email && password && !errorMessage);
	}, [email, password, errorMessage]);

	const login = async user => {
		try {
			setIsSpinner(true);
			let response = await client
				.post("", user)
				.then(response => {
					const decodeToken = jwt(response.data);
					const currentUser = {
						uid: decodeToken._id,
						token: response.data,
					};
					setCurrentUser(currentUser);
					window.sessionStorage.setItem("uid", decodeToken._id);
					window.sessionStorage.setItem("token", response.data);
					window.sessionStorage.setItem("username", decodeToken.userName);
					window.sessionStorage.setItem("userImgUrl", decodeToken.userImgUrl);
				})
				.catch(error => {
					setErrorMessage(error.response.data);
				})
				.finally(() => {
					setIsSpinner(false);
				});
		} catch (error) {
			console.error(error);
		}
	};

	const _handleEmailChange = e => {
		const refinedEmail = removeWhitespace(e.target.value);
		setErrorMessage("");
		setEmail(refinedEmail);
		setErrorMessage(
			validateStudentEmail(refinedEmail) ? "" : "Please verify your email"
		);
	};

	const _handlePasswordChange = e => {
		setErrorMessage("");
		setPassword(removeWhitespace(e.target.value));
	};

	const _handleSubmit = () => {
		const user = {
			email,
			password,
		};

		login(user);
	};

	const _handleSignUp = e => {
		navigation("/signup", { state: { mode: "signUp" } });
	};

	const _handleForgotPassword = e => {
		navigation("/resetpassword", { state: { mode: "forgotPassword" } });
	};

	return (
		<AccPageTemplate pageTitle='Sign In' isSpinnerVisible={isSpinner}>
			<StyledForm>
				<Input
					label={"Email"}
					value={email}
					placeholder={"Please enter your email"}
					maxLength={30}
					onChange={_handleEmailChange}
				/>
				<Input
					label={"Password"}
					value={password}
					placeholder={"Please enter your password"}
					maxLength={30}
					onChange={_handlePasswordChange}
					onKeyPress={_handleSubmit}
					isPassword={true}
				/>
				<ValidationMessage color='#E60028'>{errorMessage}</ValidationMessage>
				<Button
					title={"Sign in"}
					onClick={_handleSubmit}
					disabled={!isValid}
					hiddenHoverStyle={true}
				/>
			</StyledForm>
			<StyledText onClick={_handleSignUp}>Create new account</StyledText>
			<StyledText onClick={_handleForgotPassword}>Forgot password?</StyledText>
		</AccPageTemplate>
	);
};

export default Signin;
