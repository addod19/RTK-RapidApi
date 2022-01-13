import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { CryptoCurrencies, News, Loader } from '../components';

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalState = data?.data?.stats;



  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total CryptoCUrrencies" value={globalState.total}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalState.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24hour VOLUMN" value={millify(globalState.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total MARKETS" value={millify(globalState.totalMarkets)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Coins" value={millify(globalState.totalCoins)}></Statistic></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 CryptoCurrencies in the World</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <CryptoCurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default HomePage;