import React, { useState } from 'react';
import './ProfileDropdown.css';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className={`profile-icon ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        {/* You can place an icon or text inside this div for the profile icon */}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li>Profile</li>
            <li>My Videos</li>
            <li>Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
