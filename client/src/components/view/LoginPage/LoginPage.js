//로그인 페이지

import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "./LoginPage.module.scss";
import Google from "../../../assets/images/logo/Google.png";
import KaKao from "../../../assets/images/logo/kakao.png";
import Github from "../../../assets/images/logo/Github.png";

const LoginPage = () => {
	const [id, SetId] = useState("");
	const [password, SetPassword] = useState("");
	const [isRemember, SetIsRemember] = useState(false);
	const [cookies, SetCookie, RemoveCookie] = useCookies(["rememberId"]);

	const OnIdHandler = (event) => {
		SetId(event.currentTarget.value);
	};

	const OnPasswordHandler = (event) => {
		SetPassword(event.currentTarget.value);
	};

	const OnSubmitHandler = (event) => {
		event.preventDefault();

		console.log("ID", id);
		console.log("Password", password);
	};

	useEffect(() => {
		if (cookies.rememberId !== undefined) {
			SetId(cookies.rememberId);
			SetIsRemember(true);
		}
	}, [cookies.rememberId]);

	// checkbox 값을 변화시킬때
	const OnChangeHandler = (e) => {
		SetIsRemember(e.target.checked);
		return isRemember;
	};

	// 로그인 button을 클릭할때
	const OnClickHandler = (e) => {
		if (isRemember) {
			SetCookie("rememberId", id);
		} else {
			RemoveCookie("rememberId");
		}
	};

	return (
		<center className="loginCenter">
			<div className={[styles.loginPage, "NanumSquare"].join(" ")}>
				<h2>로그인</h2>
				<br />

				<form onSubmit={OnSubmitHandler}>
					<input
						className={[
							styles.inputStyle,
							"Spoqa Han Sans Neo",
						].join(" ")}
						value={id}
						placeholder="아이디"
						onChange={OnIdHandler}
						required
					/>
					<span>
						<br />
					</span>

					<input
						type="password"
						className={[
							styles.inputStyle,
							"Spoqa Han Sans Neo",
						].join(" ")}
						value={password}
						placeholder="비밀번호"
						onChange={OnPasswordHandler}
						required
					/>
					<span>
						<br />
					</span>

					<label>
						<input
							type="checkbox"
							onChange={OnChangeHandler}
							checked={isRemember}
						/>
						&nbsp;아이디 기억하기
					</label>
					<br />

<<<<<<< HEAD
					<button onClick={OnClickHandler}>로그인</button>
=======
					<button type="submit" onClick={OnClickHandler}>
						로그인
					</button>
>>>>>>> seungeun

					<button type="button">회원가입</button>

					<div className={styles.hrSect}>SNS 로그인</div>

<<<<<<< HEAD
					<button className={styles.google}>
=======
					<button type="button" className={styles.google}>
>>>>>>> seungeun
						<img alt="Google로고" src={Google} />
						구글 로그인
					</button>

<<<<<<< HEAD
					<button className={styles.kakao}>
=======
					<button type="button" className={styles.kakao}>
>>>>>>> seungeun
						<img alt="KaKao로고" src={KaKao} />
						카카오 로그인
					</button>

<<<<<<< HEAD
					<button className={styles.github}>
=======
					<button type="button" className={styles.github}>
>>>>>>> seungeun
						<img alt="Github로고" src={Github} />
						GitHub 로그인
					</button>
				</form>
			</div>
		</center>
	);
};

export default LoginPage;
