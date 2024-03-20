import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'

const List = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/submissions');
            setUserData(response.data); // Set fetched data into state
        } catch (err) {
            console.log("Error fetching data:", err);
        }
    }

    return (
        <div className='table-container'>
            <table className='table-style' border={1}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Language</th>
                        <th>Standard Input</th>
                        <th>Code</th>
                        <th>Submission Time</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, i) => (
                        <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.code_language}</td>
                            <td>{user.std_input}</td>
                            <td>{user.code.substring(0, 100)}{user.code.length > 100 ? '...' : ''}</td>
                            <td>{user.submission_time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;
