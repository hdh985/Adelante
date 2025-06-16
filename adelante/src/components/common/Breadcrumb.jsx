import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="breadcrumb-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;