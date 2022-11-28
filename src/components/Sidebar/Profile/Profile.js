import React from 'react'

const profilePicture = 'https://avatars.githubusercontent.com/u/48496610?s=400&u=968d0cc16d28b5dedfcaf9c77d7a9349fecca60d&v=4';

function Profile(props) {
    return (
        <div className="profile-container">
            <img src={profilePicture} className="profile" alt="logo" />
            <h1 className="name">{props.name}</h1>
            <h3 className="tagline">{props.tagline}</h3>
        </div>
    )
}

export default Profile