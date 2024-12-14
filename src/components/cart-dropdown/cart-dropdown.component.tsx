import { useContext } from 'react';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems?.length ? (
          cartItems?.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.base}
        onClick={handleGoToCheckout}
      >
        CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
