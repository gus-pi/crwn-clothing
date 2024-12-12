import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems?.map((cartItem) => (
          <div key={cartItem.id}>
            <h2>{cartItem.name}</h2>
            <span>{cartItem.quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}> + </span>
            <span onClick={() => removeItemToCart(cartItem)}> - </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
