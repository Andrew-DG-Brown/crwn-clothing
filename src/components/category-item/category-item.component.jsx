import React from "react";
import "./category-item.component.scss";

const CategoryItems = ({ category }) => {
  return category.map(({ id, title, imageUrl }) => {
    return (
      <div className="category-container" key={id}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    );
  });
};

export default CategoryItems;
