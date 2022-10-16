import React, {createContext, FC, useContext, useState, Dispatch, SetStateAction} from 'react';

interface IProductListContext {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}

export const ProductListContext = createContext({} as IProductListContext);

export const ProductListProvider: FC = ({children}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const context = {
    selectedCategories,
    setSelectedCategories,
  };

  return (
    <ProductListContext.Provider value={context}>
      {children}
    </ProductListContext.Provider>
  );
};

export const useProductList = () => useContext(ProductListContext);
