import ProductCard from "../product-card/product-card.component";

import { Link } from "react-router-dom";

import "./category-preview.styles.scss";

const CatagoryPreview = ({ title, products }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="category-preview-container">
      <div className="header">
        <h2>
          <Link to={title} className="title">
            {capitalizeFirstLetter(title)}
          </Link>
        </h2>
        <Link to={title} className="see-all">
          See All
        </Link>
      </div>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default CatagoryPreview;
