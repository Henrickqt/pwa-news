import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import { createMarkup } from '../../utils/createMarkup';

import '../../styles/global.css';

function World({ values }) {
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
    const isFirst = index === 0;
    const spanValue = isFirst ? 24 : 12;
    
    return (
      <Col className="container" span={spanValue} key={`post-world-${index}`}>
        <article onClick={() => handleOpenPost(id)}>
          <p>
            <strong className="title" dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p className="description" dangerouslySetInnerHTML={createMarkup(description)} />
          {isFirst && image.url && renderImg({image, description})}
        </article>
      </Col>
    );
  };

  const handleOpenPost = (id) => {
    history.push(`/world/${id}`);
  };

  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  );
}

World.defaultProps = {
  values: [],
}

World.propTypes = {
  values: PropTypes.array.isRequired,
}

export default memo(World);
