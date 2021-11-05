import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import { createMarkup } from '../../utils/createMarkup';

import '../../styles/global.css';

function Technology({ values }) {
  const history = useHistory();

  const renderImg = ({ image, description }) => {
    return (
      <div>
        <img src={image.url} alt={description} width='100%' />
      </div>
    );
  };

  const renderPost = (post, index) => {
    const { title, image, description, id } = post;
    
    return (
      <Col className="container" span={12} md={6} key={`post-technology-${index}`}>
        <article onClick={() => handleOpenPost(id)}>
          {image.url && renderImg({image, description})}
          <p>
            <strong className="title" dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p className="description" dangerouslySetInnerHTML={createMarkup(description)} />
        </article>
      </Col>
    );
  };

  const handleOpenPost = (id) => {
    history.push(`/technology/${id}`);
  };

  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  );
}

Technology.defaultProps = {
  values: [],
}

Technology.propTypes = {
  values: PropTypes.array.isRequired,
}

export default memo(Technology);
