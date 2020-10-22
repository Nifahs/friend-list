import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendProfile = () => {

    let {id} = useParams();
    const [friends, setFriends] = useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setFriends(data))
    }, [])

    const{name, email, phone, website} = friends;

    return (
        <div>
            <div>THis is Friend Profile of id {id}</div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendProfile;