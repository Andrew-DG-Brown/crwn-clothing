import "./catagory.styles.scss";

import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { categoriesMapSelector } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { useParams } from "react-router-dom";

const Catagory = () => {
  const { catagory } = useParams();
  const categoriesMap = useSelector(categoriesMapSelector);
  const [products, setProducts] = useState(categoriesMap[catagory]);

  useEffect(() => {
    setProducts(categoriesMap[catagory]);
  }, [catagory, categoriesMap]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Fragment>
      <h2 className="catagory-title">{capitalizeFirstLetter(catagory)}</h2>
      <div className="catagory-container">
        {products &&
          products.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
    </Fragment>
  );
};

export default Catagory;
