import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

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
        <div>
          <a href="/add-post"><button>Make a Post!</button></a>
          <a href="/resources"><button>Resources</button></a>
          <a href="/pinned"><button>Pinned Posts</button></a>
        </div>

        <div>
        {
          Object.keys(posts).reverse().map(function(key) {
            return (
              <div id ="scr" class="container">
              <div id="post1" class="post" onclick="">
              
              <div key={key}>
                <div>Title: { posts[key].title }</div>
                <div>Content: { posts[key].content }</div>
                <div>Agrees: { posts[key].upvote }</div>
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
      </div>
    );
  }
}

export default Posts;
