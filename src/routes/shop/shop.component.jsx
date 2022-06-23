import { useContext, Fragment } from "react";
import { CatagoriesContext } from "../../contexts/catagories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { catagoriesMap } = useContext(CatagoriesContext);

  return (
    <Fragment>
      {Object.keys(catagoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {catagoriesMap[title].map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
