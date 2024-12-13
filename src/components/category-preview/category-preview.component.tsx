import { Product } from '../../utils/types/types';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

type CategoryPrevProps = {
  title: string;
  products: Product[];
};

const CategoryPreview = ({ title, products }: CategoryPrevProps) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
