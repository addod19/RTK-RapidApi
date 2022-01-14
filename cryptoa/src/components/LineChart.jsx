import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  console.log(coinHistory);
  return (
    <>
      <Row className='chrt-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className='current-price '>
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line 
        data={data}
        options={options}
      />
    </>
  );
};

LineChart.propTypes = {
  coinHistory: PropTypes.instanceOf([]),
  currentPrice: PropTypes.number,
  coinName: PropTypes.string,
}

export default LineChart;