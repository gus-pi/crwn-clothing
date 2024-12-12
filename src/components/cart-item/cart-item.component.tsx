import { CartProduct } from '../../utils/types/types';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }: { cartItem: CartProduct }) => {
  return (
    <div>
      <h2>{cartItem.name}</h2>
      <span>{cartItem.quantity}</span>
    </div>
  );
};

export default CartItem;
