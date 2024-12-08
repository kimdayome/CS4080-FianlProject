// Sidebar.js

import React from "react";
import './Sidebar.css';

function Sidebar({ profile, token }) {
    return (
        <div className="sidebar">
            {/* Render logo only if not logged in */}
            {!token && <img className="logo" src="/images/logo.jpg" alt="logo" />}

            {/* User Profile */}
            {profile && (
                <div className="profile-section">
                    <img
                        className="profile-image"
                        src={profile.images?.[0]?.url || "/images/default-profile.png"} // Default if no image
                        alt={profile.display_name || "Profile"}
                    />
                    <div className="profile-name">{profile.display_name}</div>
                    <div className="profile-email">{profile.email}</div>
                </div>
            )}

            {/* Menu Items */}
            <ul className="menu-items">
                <li className="menu-item">
                    Home
                </li>
                <li className="menu-item active">
                    My Profile
                </li>
                <li className="menu-item">
                    My Library
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;