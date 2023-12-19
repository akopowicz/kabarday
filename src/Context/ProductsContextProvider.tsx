import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
// import { AddProductSchema } from '../api/products';
// import { User } from '../FakeRegisterComponent/FakeRegisterComponent';
export type productTypeType = {
    type_name: string,
    // product_type_id: string,
    // id: string,
}
export type ProductType = {
    name: string;
    description: string | null;
    price: number | null;
    composition: string | null;
    stock: number | null;
    sex: string | null;
    product_type: productTypeType | null;
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
        <ProductsContext.Provider value={{ productType, setProductType, filteredProducts, setFilteredProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => {
    const ctx = useContext(ProductsContext)

    if (!ctx) { // poza komponentem dziecka providera zwróci nulla
        throw new Error("Missing clientContext, it's not wrapped in ClientProvider")
    }
    return ctx
}
