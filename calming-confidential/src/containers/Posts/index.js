import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
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
          Object.keys(posts).map(function(key) {
            return (
              <div id ="scr" class="container">
              <div id="post1" class="post" onclick="">
              
              <div key={key}>
                <div class="text"><h3>Title: { posts[key].title }</h3></div>
                <div>Content: { posts[key].content }</div>
                <div>Upvotes: { posts[key].upvote }</div>
                <div>Downvotes: { posts[key].downvote }</div>
                <div>
                  <button
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button>
                  <button
                    onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Downvote
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
