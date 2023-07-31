import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
const Scorepage = () => {
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null);

    useEffect(() => {
        // Fetch the list of matches from the external API
        fetchMatches();
    }, []);

    const fetchMatches = async () => {
        try {
            const response = await fetch('https://cricapi.com/api/matches/'); // Replace with the actual API endpoint for fetching match data
            const data = await response.json();
            console.log(data);
            setMatches(data.matches); // Assuming the API response contains an array of matches
        } catch (error) {
            console.error('Error fetching matches:', error);
        }
    };

    const handleMatchSelect = (match) => {
        setSelectedMatch(match);
    };

    return (
        <div>
            <NavBar/>
            <h2>Matches List</h2>
            <ul>
                {matches.map((match) => (
                    <li key={match.id}>
                        <button onClick={() => handleMatchSelect(match)}>
                            {match.name} - {match.date}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedMatch && (
                <div>
                    <h3>Selected Match:</h3>
                    <p>Match Name: {selectedMatch.name}</p>
                    <p>Date: {selectedMatch.date}</p>
                    {/* Add more details about the selected match */}
                </div>
            )}
        </div>
    );
};

export default Scorepage;
