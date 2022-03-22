import React, { useEffect, useState } from 'react';
import './Users.css';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h1>Welcome to user file:-</h1>
            <div className='users'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;