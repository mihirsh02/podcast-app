import React from 'react';

import './landing.css';

function Landing() {

    return (
        <div class="wrapper">
            <div class="title-text">
                <div class="title login">
                    Login
                </div>
                <div class="title signup">
                    Signup
                </div>
            </div>
            <div class="form-container">
                <div class="slide-controls">
                    <input type="radio" name="slide" id="login" checked/>
                    <input type="radio" name="slide" id="signup"/>
                    <label for="login" class="slide login">Login</label>
                    <label for="signup" class="slide signup">Signup</label>
                    <div class="slider-tab"></div>
                </div>
                <div class="form-inner">
                    <form action="login.php" method="POST" class="login">
                        <div class="field">
                            <input type="email" id="email" placeholder="Email Address" name="email" required/>
                        </div>
                        <div class="field">
                            <input type="password" id="password" placeholder="Password" name="password" required/>
                        </div>
                        <div class="pass-link">
                            <a href="/">Forgot password?</a>
                        </div>
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Login"/>
                        </div>
                        <div class="signup-link">
                            Not a member? <a href="/">Signup now</a>
                        </div>
                    </form>
                    <form action="process.php" method="POST" class="signup">
                        <div class="field">
                            <input type="email" placeholder="Email Address" name="email" required/>
                        </div>
                        <div class="field">
                            <input type="password" placeholder="Password" name="password" required/>
                        </div>
                        <div class="field">
                            <input type="password" placeholder="Confirm password" name="confirm_password" required/>
                        </div>
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Signup"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Landing;