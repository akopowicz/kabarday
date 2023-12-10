import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
// import { AddProductSchema } from '../api/products';
// import { User } from '../FakeRegisterComponent/FakeRegisterComponent';

// type ProductType = {
//     name: string;
//     description: string;
//     price: number;
//     composition: string;
//     stock: number;
//     sex: string;
//     type: string;
//     id: string;
// }

type UserProductsContextProps = {
    userProductType: string,
    setUserProductType: Dispatch<SetStateAction<string>>,
    // filteredProducts: ProductType[],
    // setFilteredProducts: Dispatch<SetStateAction<ProductType[]>>,
    userSearchProducts:string,
    setUserSearchProducts: Dispatch<SetStateAction<string>>,
}

const UserProductsContext = createContext<UserProductsContextProps | null>(null)

export const UserProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userProductType, setUserProductType] = useState("all");
    const [userSearchProducts, setUserSearchProducts] = useState("");
    // const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    return (
        <UserProductsContext.Provider value={{ userProductType, setUserProductType, userSearchProducts, setUserSearchProducts}}> 
          {children}
        </UserProductsContext.Provider>
      );
}

export const useUserProductsContext=()=>{
    const ctx=useContext(UserProductsContext)

    if(!ctx){ // poza komponentem dziecka providera zwróci nulla
        throw new Error("Missing clientContext, it's not wrapped in ClientProvider")
    }
    return ctx
}
