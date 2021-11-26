import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchUser = async (username) => {
  const apiConfig = {
    headers: {
      'Content-Type': 'application/json',
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
  const [user, setUser] = useState('');
  const [username, setUserName] = useState('');

  useEffect(() => {
    fetchUser('addodaniellarbi').then((user) => {
      setUser(user || '');
    });
  }, []);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted ${username}`);
  };

  return (
    <>
      {/* map and display the users here */}
      {user}
      <input
        type="text"
        placeholder="Enter your torre username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button type="submit" onSubmit={handleSubmit}>Get User</button>
    </>
  );
};

export default UserList;
