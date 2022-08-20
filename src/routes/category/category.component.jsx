import "./category.styles.scss";

import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { categoriesMapSelector } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesMapSelector);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Fragment>
      <h2 className="category-title">{capitalizeFirstLetter(category)}</h2>
      <div className="category-container">
        {products &&
          products.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
