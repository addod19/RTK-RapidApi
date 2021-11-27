import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/css/userList.css';

const UserList = () => {
  const [users, setUsers] = useState('');
  const [username, setUserName] = useState('addodaniellarbi');

  let content = null;

  useEffect(async () => {
    const result = await axios.get(`https://torre.bio/api/bios/${username}`);
    console.log(result);
    setUsers(result.data);
  }, [username]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted ${username}`);
  };

  if (users) {
    content = (
      <div className="main-wrapper">
        <div className="user-profile">
          <img src={users.person.pictureThumbnail} alt="some user" />
          <p>{users.person.name}</p>
        </div>

        <div className="skills-interest">
          <h2>Skills and Interest</h2>
          <div className="master-influencer">
            <h3>
              <i className="icon" />
              Master Influencer
            </h3>
            <p>{users.strengths[27].name}</p>
            <p>{users.strengths[28].name}</p>
          </div>
          <div className="proficient">
            <h3>
              <i className="" />
              Proficient
            </h3>
            <p>{users.strengths[26].name}</p>
            <p>{users.strengths[17].name}</p>
            <p>{users.strengths[0].name}</p>
          </div>
        </div>
      </div>
    );
  } else {
    <p>LOading.........</p>;
  }

  return (
    <>
      {/* map and display the users here */}
      <input
        type="text"
        placeholder="Enter your torre username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button type="submit" onSubmit={handleSubmit}>Get User</button>
      {content}
    </>
  );
};

export default UserList;
