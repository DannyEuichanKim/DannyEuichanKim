import React, { Component } from 'react';
import Navbar from '../Navbar/index.js';
import './style.css';
// import Card from "card";

class Resources extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div class = "content">
					<div class = "title1">
						<h1>List of resources</h1>
					</div>
					<div class = "body">
						<div>
							<a href="https://wellness.uchicago.edu/about/appointments/">
								<button class = "button1"> 
									Schedule an appointment with SCS
								</button>
							</a>
						</div>
						<div>
							<a href="https://wellness.uchicago.edu/mental-health/referrals-from-scs/">
								<button class = "button1">
									Get an SCS referral
								</button>
							</a>
						</div>
						<div>
							<a href="https://wellness.uchicago.edu/mental-health/lets-talk/">
								<button class = "button1"> 
									Learn more about Let's Talk
								</button>
							</a>
						</div>
						<div>
							<a href="https://lean0n.me/uchicago/">
								<button class = "button1">
									Contact Lean on Me
								</button>
							</a>
						</div>
					</div>
				</div>
			</>
//					<a href="https://wellness.uchicago.edu/mental-health/lets-talk/">Let's Talk</a>: Informal walk-in sessions with SCS staff.
//					<br/>
//					<a href="https://wellness.uchicago.edu/mental-health/referrals-from-scs/">SCS referrals</a>: For therapists outside of UChicago
//				</div>
		//  <script type="text/javascript" src="scripts/script.js"></script>
		// html goes here (make one big overarching div)
		);
	}
}

export default Resources;
