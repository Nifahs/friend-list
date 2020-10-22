import React from 'react';


import './Friends.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const Friends = (props) => {
  const { name, email, id } = props.friend;
  
  const history = useHistory();
  function handleClick(FriendId){
    history.push(`/friend/${FriendId}`);
  }

  
  return (
    <div className='FriendsStyle'>
      <h4>{name}</h4>
      <h6>{email}</h6>
      
      {/* <button></button> */}
      
      <Button variant="info" onClick={()=>handleClick(id)}>Visit Profile</Button>
    </div>
  );
};

export default Friends;