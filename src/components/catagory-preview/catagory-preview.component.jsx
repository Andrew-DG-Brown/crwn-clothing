import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CatagoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
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
