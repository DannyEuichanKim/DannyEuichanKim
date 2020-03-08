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
        {
              <BrowserRouter>
              <Link to="/add-post"><button id="1"><p>Create a post</p></button></Link>
              </BrowserRouter>

        }
        {
              <BrowserRouter>
              <Link to="/Resources"><button id="2"><p>Resources</p></button></Link>
              </BrowserRouter>
        }
        {
              <BrowserRouter>
              <Link to="/Pinned-Posts"><button id="3"><p>Pinned Posts</p></button></Link>
              </BrowserRouter>
        }
        </div>

        <div>
        {
          Object.keys(posts).reverse().map(function(key) {
            return (
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
