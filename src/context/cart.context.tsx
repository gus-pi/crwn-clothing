import { createContext, Dispatch, SetStateAction, useState } from 'react';
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
}>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean | null>(false);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
