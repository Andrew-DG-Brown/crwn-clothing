import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);
  console.log(currentProducts);

  return (
    <div className="products-container">
      {currentProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
