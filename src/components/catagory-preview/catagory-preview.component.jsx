import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Header,
  SeeAll,
  Title,
  Preview,
} from "./category-preview.styles";

const CatagoryPreview = ({ title, products }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <CategoryPreviewContainer>
      <Header>
        <h2>
          <Title onClick={scrollToTop} to={title}>
            {title}
          </Title>
        </h2>
        <SeeAll onClick={scrollToTop} to={title}>
          See All
        </SeeAll>
      </Header>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CatagoryPreview;
