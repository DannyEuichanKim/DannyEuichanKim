import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/index.js'
import logo from './logo.png';
import inclusion from './inclusion.png';
import lom from './lom.png';
import chat from './chat.png';

class Pinned extends Component {
  render() {

    return (
      <div className="Posts">
        <Navbar />
        <div id ="scr" class="container"
        style={{marginLeft: "15%", marginTop: "5%"}}>
        <h1 style={{color: "black"}}>Pinned Posts</h1>
          <ul style={{width: "100%", textAlign: "left"}}>
            <li>
              <img src={lom} width="100" height="100"/>
              <a href="https://lean0n.me/">
                <h3>Reminder: You can talk with someone right now on Lean On Me!</h3>
                <p>Confident Confidential is great, but if you need a more tailored, consistent...</p>
              </a>
            </li>

            <li>
              <img src={chat} width="100" height="100"/>
              <h3>Weekly Events Discussion Page</h3>
              <p>Use this thread as a place to.... </p>
            </li>

            <li>
              <img src={inclusion} width="100" height="100"/>
              <a href="https://www.classes.cs.uchicago.edu/archive/2020/winter/20370-1/">
                <h3>Visionary new students in Inclusive Tech Class create helpful website for those struggling with mental health at UChicago</h3>
                <p>What do you guys think about this idea? Nothing could compare to Confident Confidential</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Pinned;