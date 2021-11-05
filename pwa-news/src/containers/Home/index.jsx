import React, { memo, useEffect, useState } from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { DollarCircleOutlined, GlobalOutlined, LaptopOutlined } from '@ant-design/icons';

import api from '../../services/api';

import Economy from '../../components/Economy';
import Technology from '../../components/Technology';
import World from '../../components/World';

import '../../styles/global.css';

const { Content } = Layout;

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNews = (articles) => {
    setLoading(false);

    setNews({
      economy: articles[0]?.value.value,
      technology: articles[1]?.value.value,
      world: articles[2]?.value.value,
    });
  };

  useEffect(() => {
    setLoading(true);

    Promise.allSettled([
      api.getNews('economy'),
      api.getNews('technology'),
      api.getNews('world'),
    ])
      .then(handleNews);
  }, []);

  if (loading) {
    return (
      <div>Carregando...</div>
    );
  }

  return(
    <Content className="content">
      <Row gutter={[16, 16]}>
        <Col span={24} md={12}>
          <h2 className="section-title">
            <GlobalOutlined className="section-icon" />
            World
          </h2>
          <World values={news.world} />
        </Col>
        <Col span={24} md={12}>
          <h2 className="section-title">
            <DollarCircleOutlined className="section-icon" />
            Economy
          </h2>
          <Economy values={news.economy} />
        </Col>
      </Row>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="section-title">
            <LaptopOutlined className="section-icon" />
            Technology
          </h2>
          <Technology values={news.technology} />
        </Col>
      </Row>
    </Content>
  );
}

export default memo(Home);
