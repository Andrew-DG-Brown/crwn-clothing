import "./catagory.styles.scss";

import { useContext, useState, useEffect, Fragment } from "react";

import { CatagoriesContext } from "../../contexts/catagories.context";

import ProductCard from "../../components/product-card/product-card.component";

import { useParams } from "react-router-dom";

const Catagory = () => {
  const { catagory } = useParams();
  const { catagoriesMap } = useContext(CatagoriesContext);
  const [products, setProducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
    setProducts(catagoriesMap[catagory]);
  }, [catagory, catagoriesMap]);

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
