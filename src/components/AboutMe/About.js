import React from "react";
import './About.css';

function About() {
	return (
		<main className="container">
    <h2 className="text-center">Welcome to my Portfolio!</h2>
			<div id="aboutMe" className="bg-dark p-3">
				<p className="text-light pl-3 ml-3">
					Full-stack developer looking for full-time opportunity within web development. Through consistent
					self-learning and drive to be on top of the latest technologies and skills needed within the
					industry, I am looking to establish my presence in the ever-growing tech world.
    </p>
        <p className="text-light pl-3 ml-3">Ever since I was young, all I ever wanted to do was to help people. That mindset has not changed.
					Now, I continue to build my career with the motivation and determination to do just that. By
					combining my two passions, I believe i can reach and assist individuals using the knowledge I have
					gained through Technology and Psychology.
        </p>
			</div>
		</main>
	);
}

export default About;
