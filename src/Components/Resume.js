import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../App";
import {
	ListDisplay,
	BarDisplay,
	HeaderAndList,
	HeaderAndBars,
} from "./ElementsDisplay";
import { ResumeTitles } from "./Titiles";

function Resume(props) {
	const [education, setEducation] = useState([]);
	const [work, setWork] = useState();
	const [techSkills, setTechSkills] = useState();
	const [otherSkills, setOtherSkills] = useState();
	const [langs, setLangs] = useState();

	const language = useContext(LanguageContext);

	useEffect(() => {
		if (props.data) {
			var educ = props.data.education.map((education, index) =>
				ListDisplay(
					index,
					education.school,
					education.degree,
					education.graduated,
					education.description
				)
			);
			var w = props.data.work.map((work, index) =>
				ListDisplay(
					index,
					work.company,
					work.title,
					work.years,
					work.description
				)
			);

			var tsk = props.data.skills.tech.map((skill) => BarDisplay(skill, "#7E91B4"));
			var osk = props.data.skills.not_tech.map((skill) =>
				BarDisplay(skill, "#7DA3C7")
			);
			var l = props.data.skills.languages.map((skill) => BarDisplay(skill,"#E6A69D"));
		}
		setEducation(educ);
		setWork(w);
		setTechSkills(tsk);
		setOtherSkills(osk);
		setLangs(l);

	}, [props.data]);

	return (
		<section id="resume">
			<HeaderAndList
				name="Work"
				title={ResumeTitles[language]["Work"]}
				content={work}
			/>
			<HeaderAndList
				name="Education"
				title={ResumeTitles[language]["Education"]}
				content={education}
			/>
			<HeaderAndBars
				name="Tech"
				title={ResumeTitles[language]["Tech Skills"]}
				content={techSkills}
			/>
			<HeaderAndBars
				name="Other"
				title={ResumeTitles[language]["Other Skills"]}
				content={otherSkills}
			/>
			<HeaderAndBars
        name="Languages"
        title={ResumeTitles[language]["Languages"]}
        content={langs}
      />
		</section>
	);
}

export default Resume;
