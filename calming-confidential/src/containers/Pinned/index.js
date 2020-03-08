import React, { Component } from 'react';

class Pinned extends Component {
  render() {

    return (
      <div id ="scr" class="container">
      <h1>Pinned Posts</h1>
        <ul>
          <li>
            <img src="http://lorempixum.com/100/100/nature/1" />
            <h3>Reminder: You can talk with someone right now on Lean On Me!</h3>
            <p>Confident Confidential is great, but if you need a more tailored, consistent...</p>
          </li>
            
          <li>
            <img src="http://lorempixum.com/100/100/nature/2" />
            <h3>Weekly Events Discussion Page</h3>
            <p>Use this thread as a place to.... </p>
          </li>
       
          <li>
            <img src="http://lorempixum.com/100/100/nature/3" />
            <h3>Visionary new students in Inclusive Tech Class create helpful website for those struggling with mental health at UChicago</h3>
            <p>What do you guys think about this idea? Nothing could compare to Confident Confidential</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Pinned;
