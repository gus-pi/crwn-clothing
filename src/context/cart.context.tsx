import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const CartContext = createContext<{
  isCartOpen: boolean | null;
  setIsCartOpen: Dispatch<SetStateAction<boolean | null>>;
}>({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean | null>(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
