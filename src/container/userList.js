import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/css/userList.css';

const fetchUser = async (username) => {
  const apiConfig = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  // https://torre.co/api/suite/opportunities/$id
  // https://torre.bio/api/bios/${username}
  try {
    const result = await axios.get(`https://torre.bio/api/bios/${username}`, apiConfig.headers);
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
};

const UserList = () => {
  const [users, setUsers] = useState('');
  const [username, setUserName] = useState('addodaniellarbi');

  let content = null;

  useEffect(async () => {
    // fetchUser('addodaniellarbi').then((users) => {
    //   setUsers(users || '');
    // });
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
    fetchUser();
  };

  if (users) {
    // const [strengths] = users.person;
    content = (
      <div className="main-wrapper">
        <div className="user-profile">
          <img src={users.person.pictureThumbnail} alt="some user" />
          <p>{users.person.name}</p>
        </div>

        <div className="skills-interset">
          <div className="master-influencer">
            <p>{users.strengths[27].name}</p>
            <p>{users.strengths[28].name}</p>
          </div>
          <div className="proficient">
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
