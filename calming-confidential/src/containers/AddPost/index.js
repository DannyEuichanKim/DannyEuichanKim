import React, { Component } from 'react';
import Navbar from '../Navbar/index.js'

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: '',
    content: ''
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleChange2 = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebase.ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0,
      content: this.state.content,
      comments: [""],
      num_comments: 0,
      single: ''
    });

    this.setState({
      title: '',
      content: ''
    });
  }

  render() {
    return (
      <div className="AddPost">
        <Navbar />
        <div id ="scr" class="containerPosts">
        <br />
          <div id="post1" class="addpost" onclick="">
            <br />
            <div class="margin">
            <input size="139"
              type="text"
              placeholder="Write the title of your post"
              onChange={ this.handleChange }
              value={ this.state.title }
            />
            <br /><br />
            <textarea size="140" style = {{width: 1127, height: 490}}
              type="text"
              placeholder="Write the content of your post"
              onChange={ this.handleChange2 }
              value={ this.state.content }
            />
            <div class="menu">
            <button
              type="submit"
              onClick={ this.handleSubmit }
            >
              Submit
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
