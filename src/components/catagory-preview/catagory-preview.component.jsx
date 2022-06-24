import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CatagoryPreview = ({ title, products }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="category-preview-container">
      <div className="header">
        <h2>
          <span className="title">{capitalizeFirstLetter(title)}</span>
        </h2>
        <span className="see-all">See All</span>
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
