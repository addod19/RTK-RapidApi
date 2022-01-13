import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalState = data?.data?.stats;



  if (isFetching) return "Loading!!!!";
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total CryptoCUrrencies" value={globalState.total}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalState.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24hour VOLUMN" value={millify(globalState.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total MARKETS" value={millify(globalState.totalMarkets)}></Statistic></Col>
      </Row>
    </>
  )
}

export default HomePage;