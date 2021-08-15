/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo/logo.png";
import styles from "./Header.module.scss";

const 로그인UI = {
	guest: (
		<ul className={styles.loginUI}>
			<li>
				<Link to="/RegisterPage">회원가입</Link>
			</li>
			<li>
				<Link to="/LoginPage">로그인</Link>
			</li>
		</ul>
	),
	user: (
		<ul className={styles.loginUI}>
			<li>
				<Link to="/UserPage">마이 페이지</Link>
			</li>
			<li>
				<Link to="/">로그아웃</Link>
			</li>
		</ul>
	),
	admin: (
		<ul className={styles.loginUI}>
			<li>관리자 페이지</li>
			<li>
				<Link to="/UserPage">마이 페이지</Link>
			</li>
			<li>
				<Link to="/">로그아웃</Link>
			</li>
		</ul>
	),
};

const Header = () => {
	const [로그인상태, 로그인상태변경] = useState("guest"); // 이 로그인 상태가 뭔지에 따라서 유저 UI가 변함
	return (
		<div className={styles.headerContainer}>
			<header className={[styles.header, "NanumSquare"].join(" ")}>
				<div className={styles.contents}>
					<Link to="/">
						<div className={styles.logo}>
							<img src={logo} width="40" alt="인트아이 로고" />
							<span>인트아이</span>
						</div>
					</Link>

					<nav className={styles.navigation}>
						<ul>
							<Link to="#">
								<li>코드 저장소</li>
							</Link>
							<Link to="/QnAPage">
								<li>질문방</li>
							</Link>
							<Link to="TechnicalNews">
								<li>기술 뉴스</li>
							</Link>
							<Link to="#">
								<li>정보 및 홍보</li>
							</Link>
							<Link to="#">
								<li>공지사항</li>
							</Link>
						</ul>
					</nav>
					{
						//로그인 상태 체크해서 다른 ui렌더링
						로그인UI[로그인상태] //key값이 '로그인상태'인 자료를 뽑아서 렌더링한다
					}
				</div>
			</header>
		</div>
	);
};

export default Header;
