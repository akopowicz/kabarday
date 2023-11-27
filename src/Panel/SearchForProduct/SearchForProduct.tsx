import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
// import { useSelector } from "react-redux"
// import { RootState } from "../../Redux/store"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../api/products"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { setProducts } from "../../Redux/productsSlice"
import { useProductsContext } from "../../Context/ProductsContextProvider"

export const SearchForProduct = () => {
    // const dispatch = useDispatch()
    const { productType, filteredProducts, setFilteredProducts } = useProductsContext()
    const [search,setSearch]=useState("")
    // const productsSlice = useSelector((state: RootState) => state.products)
    // const productType = useSelector((state: RootState) => state.product.productType)

    console.log(productType)

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

    console.log(products)


    if (products !== null && products!== undefined) {
        // dispatch(setProducts(products))
        setFilteredProducts(products)
    }
 

    return (
        <div className="search_input_wrapper">
            {/* <input placeholder="Wyszukaj Produkt" onChange={(e) => { filterProductFunction(e.target.value) }} value={search} /> */}
            <TextField
        //   id="outlined-required"
          label="Wyszukaj Produkt"
          defaultValue="Wyszukaj Produkt"
          onChange={(e) => { filterProductFunction(e.target.value) }} value={search}
        />
        </div>
    )
}

