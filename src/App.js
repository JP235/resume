import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Achievements from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

function App() {
	const [resumeData, setResumeData] = useState([]);
	const [lang, setLang] = useState("en");

	const changeLanguage = () => {
		if (lang === "en") {
      setLang("es");
		}else if (lang === "es") {
		  setLang("en");
		}
	};

	const getResumeData = () => {
		$.ajax({
			url: lang === "en" ? "/resumeData.json" : "/resumeData_es.json",
			// url: "/resumeData.json",
			dataType: "json",
			cache: false,
			success: function (data) {
				setResumeData(data);
			},
			error: function (xhr, status, err) {
				console.log(err);
				alert(err);
			},
		});
	};

	useEffect(() => {
		getResumeData();
	}, [lang]);

	return (
		<div className="App">
			<Header data={resumeData.main} languageSelect={changeLanguage} lang = {lang}/>
			<About data={resumeData.main} lang = {lang} />
			<Resume data={resumeData.resume} lang = {lang} />
			<Portfolio data={resumeData.portfolio} lang = {lang} />
			<Achievements data={resumeData.testimonials} lang = {lang} />
			<Contact data={resumeData.main} lang = {lang} />
			<Footer data={resumeData.main} lang = {lang} />
		</div>
	);
}

export default App;
