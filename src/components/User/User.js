import React from 'react';

const User = (props) => {
    const { name, gender, age } = props.user;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default User;