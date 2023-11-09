import React from 'react'
import './UserProfile.css'
import profile_icon from '../assets/elon_musk.jpg'

const UserProfile = () => {
    return (
        <div className = 'upc'>
            <div className = 'gradiant'>
                <div className = 'profile-down'>
                    <img src={profile_icon} alt="" />
                    <div className="profile-title">Elon Musk</div>
                    <div className="profile-description">
                    I am the the current CEO & Chief Product Architect of Tesla, Inc., a company that makes electric vehicles. He is also the CEO of Solar City, a company that makes solar panels, and the CEO & CTO of SpaceX, an aerospace company.
                    </div>
                    <br />
                    <br />
                    <div className="profile-button" ><a href="mailto:elon@musk.com">Contact Me</a></div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;