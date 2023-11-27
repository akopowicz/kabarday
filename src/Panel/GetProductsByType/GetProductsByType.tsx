import { useQuery } from "@tanstack/react-query"
import { getProductsType } from "../../api/products"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { setProductType } from "../../Redux/productSlice"
import { useProductsContext } from "../../Context/ProductsContextProvider"

export const GetProductsByType = () => {
    // const [type, setType] = useState("all")
    // const dispatch = useDispatch()
    // const productType = useSelector((state: RootState) => state.product.productType)
    const { productType, setProductType } = useProductsContext()
    const { isLoading: typeLoading, error: typeError, data: productsTypes } = useQuery({
        queryKey: ['productsTypes'],
        queryFn: getProductsType
    })

    const filterByType = (event: { target: { value: string } }) => {
        // setType(event.target.value as string)
        setProductType(event.target.value as string)
        // dispatch(setProductType(event.target.value as string))
        console.log(event.target.value)
        console.log(productType)
      }

    if (typeError) {
        return <p>Cannot get products</p>
    }
    if (typeLoading) {
        return <p>Loading...</p>;
    }

    if (productsTypes === undefined) {
        return <p>Spróbuj ponownaie</p>
    }

  

    return (
        <FormControl >
            <InputLabel id="select-label">Typ</InputLabel>
            <Select
                labelId="select-label"
                id="simple-select"
                value={productType}
                label="type"
                onChange={filterByType}
            >
                <MenuItem value={"all"}>Wszystkie</MenuItem>
                {productsTypes?.map(product => {
                    return <MenuItem key={product.id} value={product.id}>{product.type_name}</MenuItem>
                })}

            </Select>
        </FormControl>
    )
}

