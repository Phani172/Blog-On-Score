import './Hompage.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Homepage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // If login is successful, you can redirect the user to another page or show a success message.
                console.log('Login successful!');
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div id="back">
            <h2>Login</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='text'>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text'>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Link to="/Scorepage">
                    <button type="submit">Login</button>
                </Link>
            </form>
        </div>
    );
};

export default Homepage;
