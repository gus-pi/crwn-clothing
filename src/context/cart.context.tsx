import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { CartProduct, Product } from '../utils/types/types';

const addCartItem = (cartItems: CartProduct[], productToAdd: Product) => {
  const exisitingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (exisitingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<{
  isCartOpen: boolean | null;
  setIsCartOpen: Dispatch<SetStateAction<boolean | null>>;
  cartItems: CartProduct[] | null;
  addItemToCart: (productToAdd: Product) => void;
  cartCount: number;
}>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean | null>(false);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
