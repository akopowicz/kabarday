import { TextField } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../api/products"
import { useState } from "react"
import { useProductsContext } from "../../Context/ProductsContextProvider"

export const SearchForProduct = () => {
    const { productType, setFilteredProducts } = useProductsContext()
    const [search,setSearch]=useState("")

    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products', search, productType],
        queryFn: () => getProducts(search, productType)
    })

  
    const filterProductFunction = (search: string) => {
        setSearch(search.toLowerCase())
    }


    if (error) {
        // return <p>Cannot get products</p>
    }
    if (isLoading) {
        // return <p>Loading...</p>;
    }

    if (products === undefined) {
        // return <p>Spróbuj ponownie</p>
    }



    if (products !== null && products!== undefined) {
        setFilteredProducts(products)
    }
 

    return (
        <div className="search_input_wrapper">
            <TextField
          label="Wyszukaj Produkt"
          defaultValue="Wyszukaj Produkt"
          onChange={(e) => { filterProductFunction(e.target.value) }} value={search}
        />
        </div>
    )
}

