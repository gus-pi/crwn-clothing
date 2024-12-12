import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { CartProduct, Product } from '../utils/types/types';

const addCartItem = (cartItems: CartProduct[], productToAdd: Product) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartProduct[],
  cartItemToRemove: Product
) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //check if quanity is equal to 1, if it is remove the item from the cart
  if (existingCartItems?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id == cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartContext = createContext<{
  isCartOpen: boolean | null;
  setIsCartOpen: Dispatch<SetStateAction<boolean | null>>;
  cartItems: CartProduct[] | null;
  addItemToCart: (productToAdd: Product) => void;
  removeItemToCart: (productToAdd: Product) => void;
  cartCount: number;
}>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean | null>(false);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove: Product) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
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
