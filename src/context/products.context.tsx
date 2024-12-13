import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data';
import { Product } from '../utils/types/types';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext<{ products: Product[] | null }>({
  products: null,
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  //ADD DATA TO FIRESTORE DATABASE
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
