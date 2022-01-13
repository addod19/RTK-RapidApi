import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  console.log(data);
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total CryptoCUrrencies" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total 24hour VOLUMN" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total MARKETS" value="5"></Statistic></Col>
      </Row>
    </>
  )
}

export default HomePage;