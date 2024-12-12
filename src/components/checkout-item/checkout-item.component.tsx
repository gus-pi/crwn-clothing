import { useContext } from 'react';
import { CartProduct } from '../../utils/types/types';
import './checkout-item.styles.scss';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }: { cartItem: CartProduct }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const handleClearItem = () => clearItemFromCart(cartItem);

  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
