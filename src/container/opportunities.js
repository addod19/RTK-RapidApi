import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/css/opportunities.css';

const  Opportunities = () => {
  const [opportunities, setOpportunities] = useState('');

  let content = null;

  useEffect(async () => {
    const result = await axios.get(`https://torre.co/api/suite/opportunities/${id}`);
    console.log(result);
    setOpportunities(result.data);
  }, [username]);

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
      {opportunities}
    </>
  );
};

export default Opportunities;
