import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
import {Database} from '../supabase/types/supabase'


type ProductsContextProps = {
    productType: string,
    setProductType: Dispatch<SetStateAction<string>>,
    filteredProducts: Database["public"]["Tables"]["product_type"][],
    setFilteredProducts: Dispatch<SetStateAction<Database["public"]["Tables"]["product_type"][]>>,
    showBigPhoto: boolean,
    setShowBigPhoto: Dispatch<SetStateAction<boolean>>,
}

const ProductsContext = createContext<ProductsContextProps | null>(null)

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [productType, setProductType] = useState<string>("all");
    const [filteredProducts, setFilteredProducts] = useState<Database["public"]["Tables"]["product_type"][]>([]);
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
