import React from 'react';

const NewsCard = ({ badge, title, subtitle, content }) => {
  return (
    <div className="news-card">
      <div className="news-card-header">
        <div className="news-badge">{badge}</div>
        <div className="news-title">{title}</div>
        <div className="news-subtitle">{subtitle}</div>
      </div>
      <div className="news-content">{content}</div>
    </div>
  );
};

export default NewsCard;