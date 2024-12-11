import './cart-icon.styles.scss';
import cartIcon from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img src={cartIcon} className="shopping-icon" alt="cart icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
