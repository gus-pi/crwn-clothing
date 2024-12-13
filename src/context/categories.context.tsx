import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data';
import { Category, Product } from '../utils/types/types';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext<{
  categoriesMap: { [key: string]: Product[] };
}>({
  categoriesMap: {},
});

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  //ADD DATA TO FIRESTORE DATABASE
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
