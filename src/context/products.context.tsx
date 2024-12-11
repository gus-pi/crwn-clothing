import { createContext, useState } from 'react';
import PRODUCTS from '../../src/shop-data.json';

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const ProductsContext = createContext<{ products: Product[] | null }>({
  products: null,
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
