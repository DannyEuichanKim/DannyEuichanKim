import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/index.js'

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote,
      content: post.content
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1,
      content: post.content
    });
  }

  handleComment = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1,
      content: post.content
    });
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="Posts">
        <Navbar />
        <div>
        {
          Object.keys(posts).reverse().map(function(key) {
            return (
              <div id ="scr" class="container">
                <br />
                <div id="post1" class="post" onclick="">
                  <div class="title" key={key}>
                      <div>Title: { posts[key].title }</div>
                  </div>
                  <div class="text" key={key}>
                      <div>Content: { posts[key].content }</div>
                  </div>
                  <div class="agrees" key={key}>
                      <div>Agrees: { posts[key].upvote }</div>
                  </div>
                  <div class="menu" key={key}>
                    <div>
                      <button
                        onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                        type="button"
                      >
                         Agree
                      </button>

                      <button
                        type="button"
                      >
                        Add Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            );
          })
        }
        
      </div>
    );
  }
}

export default Posts;
