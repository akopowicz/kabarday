import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
import {Database} from '../supabase/types/supabase'


type ProductsContextProps = {
    productType: string,
    setProductType: Dispatch<SetStateAction<string>>,
    filteredProducts: Database["public"]["Tables"]["products"]["Row"][],
    setFilteredProducts: Dispatch<SetStateAction<Database["public"]["Tables"]["products"]["Row"][]>>,
    showBigPhoto: boolean,
    setShowBigPhoto: Dispatch<SetStateAction<boolean>>,
    activeNavigation: string,
    setActiveNavigation: Dispatch<SetStateAction<string>>,
    overflowY: boolean,
    setOverflowY: Dispatch<SetStateAction<boolean>>,
}

const ProductsContext = createContext<ProductsContextProps | null>(null)

export const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [productType, setProductType] = useState<string>("all");
    const [filteredProducts, setFilteredProducts] = useState<Database["public"]["Tables"]["products"]["Row"][]>([]);
    const [showBigPhoto, setShowBigPhoto] = useState(false);
    const [activeNavigation, setActiveNavigation] = useState("home");
    const [overflowY, setOverflowY] = useState(false);

    return (
        <ProductsContext.Provider value={{ productType, setProductType, filteredProducts, setFilteredProducts, showBigPhoto, setShowBigPhoto, activeNavigation, setActiveNavigation, overflowY, setOverflowY }}>
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
