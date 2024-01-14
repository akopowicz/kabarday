import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';

type sortDataType = {
    column: string,
    ascendic: true|false
}

type UserProductsContextProps = {
    userProductType: string,
    setUserProductType: Dispatch<SetStateAction<string>>,
    userSearchProducts:string,
    setUserSearchProducts: Dispatch<SetStateAction<string>>,
    sortType: sortDataType,
    setSortType: Dispatch<SetStateAction<sortDataType>>,
    sortTypeText: string,
    setSortTypeText: Dispatch<SetStateAction<string>>,
}

const UserProductsContext = createContext<UserProductsContextProps | null>(null)

export const UserProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userProductType, setUserProductType] = useState("all");
    const [userSearchProducts, setUserSearchProducts] = useState("");
    const [sortType, setSortType] = useState<sortDataType>({
        column: "name",
        ascendic: true
    });
    const [sortTypeText, setSortTypeText] = useState("Sortowanie domyślne");

    return (
        <UserProductsContext.Provider value={{ userProductType, setUserProductType, userSearchProducts, setUserSearchProducts, sortType, setSortType, sortTypeText, setSortTypeText }}>
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
