import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/css/opportunities.css';

const  Opportunities = () => {
  const [opportunities, setOpportunities] = useState(1);

  useEffect(async () => {
    const result = await axios.get(`https://torre.co/api/suite/opportunities/${opportunities}`);
    console.log(result);
    setOpportunities(result.data);
  }, [username]);

  return (
    <>
      {/* map and display the users here */}
      {opportunities}
    </>
  );
};

export default Opportunities;
