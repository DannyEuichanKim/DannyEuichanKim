import React, { Component } from 'react';

class Login extends Component {
  
  render() {
    return (
        <>
        {
            <div class="welcome">
            <h2><br />Welcome to Calming Confidential.<br />Please log in.</h2>
            <div>
              <form class="form-horizontal" method="" action="">
                <div class="form-group">
                  <input type="email" class="login" name="email" placeholder="email" />
                </div>
                <div class="form-group">
                  <input id="password-field" type="password" class="login" name="password" placeholder="password" />
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
              </form>
            <div class="loginb">
                <a class="loginl" href="/posts">Login</a>
            </div>
            </div>
            </div>
        } 
        </>
    );
  }
}

export default Login;