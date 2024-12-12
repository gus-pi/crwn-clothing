import { CartProduct } from '../../utils/types/types';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }: { cartItem: CartProduct }) => {
  return (
    <div className="cart-item-container">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
      <div className="item-details">
        <span className="name">{cartItem.name}</span>
        <span className="price">
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
