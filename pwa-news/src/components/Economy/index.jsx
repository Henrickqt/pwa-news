import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import { createMarkup } from '../../utils/createMarkup';

import '../../styles/global.css';

function Economy({ values }) {
  const history = useHistory();

  const renderImg = ({ image, description }) => {
    return (
      <img src={image.url} alt={description} width='100%' />
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
      <Col className="container" span={24} md={12} key={`post-economy-${index}`}>
        <article onClick={() => handleOpenPost(id)}>
          <p>
            <strong className="title" dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          {image?.url 
            ? renderImg({image, description}) 
            : renderDescription(description)
          }
        </article>
      </Col>
    );
  };

  const handleOpenPost = (id) => {
    history.push(`/economy/${id}`);
  };

  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  );
}

Economy.defaultProps = {
  values: [],
}

Economy.propTypes = {
  values: PropTypes.array.isRequired,
}

export default memo(Economy);
