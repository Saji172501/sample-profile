import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => setUserData(response.data))
            .catch(() => setError('Failed to load user data'));
    }, []);

    if (error) return <p className="error">{error}</p>;

    return userData ? (
        <div className="profile-container">
            <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
            <h1>{userData.name}</h1>
            <p className="username">@{userData.username}</p>

            <div className="info-section">
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Website:</strong> <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
                <p><strong>Company:</strong> {userData.company.name}</p>
            </div>

            <div className="address-section">
                <h3>Address</h3>
                <p>{userData.address.street}, {userData.address.suite}</p>
                <p>{userData.address.city}, {userData.address.zipcode}</p>
            </div>

            <p className="bio">This is a sample bio for {userData.name}, a valued member of {userData.company.name}. {userData.company.catchPhrase}.</p>
        </div>
    ) : <p>Loading...</p>;
};

export default Profile;
