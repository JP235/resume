import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Achievements from "./Components/Achievements";
import Portfolio from "./Components/Portfolio";

export const LanguageContext = React.createContext();

function App() {
	const [resumeData, setResumeData] = useState([]);
	const [language, setLanguage] = useState("en");

	const changeLanguage = () => {
		if (language === "en") {
			setLanguage("es");
		} else if (language === "es") {
			setLanguage("en");
		}
	};

	const getResumeData = (language) => {
		$.ajax({
			url: language === "en" ? "/resumeData.json" : "/resumeData_es.json",
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
		getResumeData(language);
	}, [language]);

	return (
		<LanguageContext.Provider value={language}>
			<div className="App">
				<Header
					data={resumeData.main}
					languageSelect={changeLanguage}
				/>
				<About data={resumeData.main} />
				<Resume data={resumeData.resume} />
				<Portfolio data={resumeData.portfolio} />
				<Achievements data={resumeData.achievements} />
				<Contact data={resumeData.main} />
				<Footer data={resumeData.main} />
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
