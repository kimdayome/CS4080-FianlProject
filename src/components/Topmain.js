// Topmain.js

import React from "react";
import './Topmain.css';

function Topmain({ token, logout, loginUrl }) {
    return (
        <section className="topmain-main">
           <div className="topmain">
                <img className="topmain-thumb" src="/images/main.jpg" alt="Top" />
                <div className="topmain-content">
                    <div className="topmain-tag">Hey, there!</div>
                    <h2 className="topmain-title">Good Morning<br />How's your feeling?</h2>
                    <p className="topmain-description">
                        Hi, This is Dayoung and Jessica's amazing web-app! we worked on mimicking the Spotify desktop app.
                    </p>
                </div>
                {/* Login/Logout Buttons */}
                <div className="auth-buttons">
                    {!token ? (
                        <a href={loginUrl}>Login</a>
                    ) : (
                        <button onClick={logout}>Logout</button>
                    )}
                </div>
           </div>
        </section>
    );
}

export default Topmain;