import React, { Component } from 'react';
// import Card from "card";

class Resources extends Component {
	render() {
		return (
			<>
				<div class = "content" style={{marginLeft: "25%", marginRight: "25%",
											   marginTop: "10%"}}>
					<div class = "title" style = {{backgroundColor: "#0080FF", textAlign: "center"}}>
						<h1 style={{fontSize: "64px", fontWeight: "bold"}}>List of resources</h1>
					</div>
					<div class = "body">
						<div>
							<a href="https://wellness.uchicago.edu/about/appointments/">
								<button style={{width: "100%", height: "100px", fontSize: "40px", backgroundColor: "#FFD300"}}>
									Schedule an appointment with SCS
								</button>
							</a>
						</div>
						<div>
							<a href="https://wellness.uchicago.edu/mental-health/referrals-from-scs/">
								<button style={{width: "100%", height: "100px", fontSize: "48px", backgroundColor: "#FFD300"}}>
									Get an SCS referral
								</button>
							</a>
						</div>
						<div>
							<a href="https://wellness.uchicago.edu/mental-health/lets-talk/">
								<button style={{width: "100%", height: "100px", fontSize: "48px", backgroundColor: "#FFD300"}}>
									Learn more about Let's Talk
								</button>
							</a>
						</div>
						<div>
							<a href="https://lean0n.me/uchicago/"><button style={{width: "100%", height: "100px", fontSize: "48px", backgroundColor: "#FFD300"}}>
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
