import React, { memo } from 'react';
import { Button } from 'antd';
import { ShareAltOutlined, CopyOutlined } from '@ant-design/icons';

const navigatorHasShare = navigator.share;

const URL = 'http://localhost:3000';

function Action({ post, subject }) {
  const { id, title } = post;

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - ${subject}`,
      text: title,
      url: `${URL}/${subject}/${id}`,
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`);
  };

  const renderAction = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo;
    const icon = navigatorHasShare ? <ShareAltOutlined /> : <CopyOutlined />;
    const buttonText = navigatorHasShare ? 'Compartilhar' : 'Copiar';
    
    return (
      <Button type="primary" icon={icon} size={16} onClick={action}>{buttonText}</Button>
    );
  };

  return (
    <div className="share">
      {renderAction()}
    </div>
  );
}

export default memo(Action);
