import React from "react";

function FeaturesItem({ data }) {
  const IconComponent = data.icon; // Get the icon component

  return (
    <div className="features--right--item">
      <IconComponent className="features--right--item--img" />
      <h3 className="features--right--item--title">{data.title}</h3>
      <p className="features--right--item--text">{data.text}</p>
    </div>
  );
}

export default FeaturesItem;
