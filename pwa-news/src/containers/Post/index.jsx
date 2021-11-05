import React, { memo, useEffect, useState, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Layout, Row, Col, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import Api from '../../services/api';
import { createMarkup } from '../../utils/createMarkup';

import Action from '../../components/Action';

import '../../styles/global.css';

const { Content } = Layout;

function Post() {
  const { id, subject } = useParams();
  const [post, setPost] = useState({});
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { title, image, description, datePublished } = post;

  const handleNews = useCallback((data) => {
    setLoading(false);

    setNews(data[0]?.value);
    setPost(data[1]?.value);
  }, []);

  const handleOpenPost = (id) => {
    history.push(`/${subject}/${id}`);
  }

  useEffect(() => {
    setLoading(true);

    Promise.allSettled([
      Api.getNews(subject),
      Api.getNewsById(subject, id)
    ])
      .then(handleNews)
  }, [id, subject, handleNews]);

  const renderImg = ({ image, description }) => {
    return (
      <img src={image.url} alt={description} width='75%' />
    );
  };

  const renderDescription = (description) => {
    return (
      <p className="description" dangerouslySetInnerHTML={createMarkup(description)} />
    );
  };

  const renderPost = (post, index) => {
    const { title, image, description, id } = post;

    return (
      <Col className="container" span={12} key={`post-${index}`}>
        <article onClick={() => handleOpenPost(id)}>
          <p>
            <strong className="title" dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          {image?.url 
            ? renderImg({ image, description }) 
            : renderDescription(description)
          }
        </article>
      </Col>
    );
  };

  if (loading) {
    return (
      <div>Carregando...</div>
    );
  }

  if (!post?.id) {
    return (
      <div>Post não encontrado.</div>
    );
  }

  return (
    <Content className="post-content">
      <header className="post-buttons">
        <Link to="/">
          <Button icon={<LeftOutlined />} size={16}>Voltar</Button>
        </Link>
        <Action post={post} subject={subject} />
      </header>
      <Row gutter={[16, 16]}>
        <Col className="post-container" span={24} md={16}>
          <p>{datePublished}</p>
          <h2 className="title" dangerouslySetInnerHTML={createMarkup(title)} />
          {image && renderImg({ image, description })}
          <p className="post-description" dangerouslySetInnerHTML={createMarkup(description)} />
        </Col>
        <Col span={24} md={8}>
          <Row gutter={[16, 16]}>
            {news?.value?.map(renderPost)}
          </Row>
        </Col>
      </Row>
    </Content>
  );
}

export default memo(Post);
