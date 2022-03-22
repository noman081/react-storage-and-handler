import React from 'react';
import { addToDb, addToDb2, removeFromDb } from '../../utilities/calculate';
import './User.css';
const User = (props) => {
    const { name, gender, age, id } = props.user;

    const addToCart = (id) => {
        console.log('Item added', id);
        // addToDb(id);
        addToDb2(id);
    }
    const removeFromCart = id => {
        removeFromDb(id);
    }
    // const addToCartPara = () => addToCart(id);
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p><small>ID: {id}</small></p>
            <button className='id-button' onClick={() => addToCart(id)}>Stored id!</button>
            <button className='id-button' onClick={() => removeFromCart(id)}>Delete id!</button>
        </div>
    );
};

export default User;