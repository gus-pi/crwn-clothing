import { useContext } from 'react';
import Button from '../button/button.component';
import './product-card-styles.scss';
import { CartContext } from '../../context/cart.context';
import { Product } from '../../utils/types/types';

const ProductCard = ({ product }: { product: Product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
