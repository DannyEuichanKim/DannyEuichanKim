import React, { Component } from 'react';

/* navbar template found at https://getbootstrap.com/docs/4.0/components/navbar/ */
class Navbar extends Component {
  render() {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/posts">Home</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/add-post">Make a Post!<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resources">Resources on Campus</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pinned">Pinned Posts</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
