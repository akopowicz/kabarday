import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
// import { AddProductSchema } from '../api/products';
// import { User } from '../FakeRegisterComponent/FakeRegisterComponent';

type ProductType = {
    name: string;
    description: string;
    price: number;
    composition: string;
    stock: number;
    sex: string;
    type: string;
    id: string;

}

type ProductsContextProps = {
    productType: string,
    setProductType: Dispatch<SetStateAction<string>>,
    filteredProducts: ProductType[],
    setFilteredProducts: Dispatch<SetStateAction<ProductType[]>>,
    // loggedPerson: User | null,
    // setLoggedPerson: Dispatch<SetStateAction<User|null>>,
}

const ProductsContext = createContext<ProductsContextProps | null>(null)

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [productType, setProductType] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    // const [loggedPerson, setLoggedPerson] = useState<AddProductSchema|null>(null);

    return (
        <ProductsContext.Provider value={{ productType, setProductType, filteredProducts, setFilteredProducts}}> 
          {children}
        </ProductsContext.Provider>
      );
}

export const useProductsContext=()=>{
    const ctx=useContext(ProductsContext)

    if(!ctx){ // poza komponentem dziecka providera zwróci nulla
        throw new Error("Missing clientContext, it's not wrapped in ClientProvider")
    }
    return ctx
}
