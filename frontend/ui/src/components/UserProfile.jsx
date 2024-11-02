import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({ username: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
                setUserInfo(response.data);
            } catch (err) {
                setError('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:5000/profile', userInfo, { withCredentials: true });
            setUserInfo(response.data);
            setIsEditing(false);
        } catch (err) {
            setError('Failed to update user data.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div style={{textAlign:'center', color:'white',marginTop:'80px',marginBottom:'200px'}} className="profile-container">
            <h1>User Profile</h1>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div>
                    <p><strong>Username:</strong> {userInfo.username}</p>
                    <p ><strong style={{margin:'10px'}}>Email:</strong> {userInfo.email}</p>
                    <button style={{padding:'10px',borderRadius:'20px',backgroundColor:'green',color:'white',border:'none'}} onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default Profile;