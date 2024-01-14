import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
export type productTypeType = {
    type_name: string,
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
    showBigPhoto: boolean,
    setShowBigPhoto: Dispatch<SetStateAction<boolean>>,
}

const ProductsContext = createContext<ProductsContextProps | null>(null)

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [productType, setProductType] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [showBigPhoto, setShowBigPhoto] = useState(false)

    return (
        <ProductsContext.Provider value={{ productType, setProductType, filteredProducts, setFilteredProducts, showBigPhoto, setShowBigPhoto }}>
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
