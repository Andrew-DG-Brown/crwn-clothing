import { useContext } from "react";
import { CatagoriesContext } from "../../contexts/catagories.context";
import CatagoryPreview from "../../components/catagory-preview/catagory-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  const { catagoriesMap } = useContext(CatagoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(catagoriesMap).map((title) => {
        const products = catagoriesMap[title];

        return (
          <CatagoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
