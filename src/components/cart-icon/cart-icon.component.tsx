import './cart-icon.styles.scss';
import cartIcon from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={cartIcon} className="shopping-icon" alt="cart icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
