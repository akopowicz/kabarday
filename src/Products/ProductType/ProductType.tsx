import { useLocation } from "react-router-dom";
import { getProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import AllProducts from "../AllProducts/AllProducts";
import { useUserProductsContext } from "../../Context/UserProductsContextProvider";
import { SkeletonAllProducts } from "../../Skeleton/SkeletonAllProducts/SkeletonAllProducts";

export const ProductType = () => {
    const location = useLocation();
    const typeId = location.state
    const { sortType } = useUserProductsContext();
   
    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products', typeId, sortType.column, sortType.ascendic],
        queryFn: () => getProducts("", "", sortType.column, sortType.ascendic, typeId),
    })

    if (error) {
        return <p>Cannot get products</p>
    }

    if (isLoading) {
        return <SkeletonAllProducts/>
    }

    if (products === undefined || products === null) {
        return <p>Spróbuj ponownie</p>
    }

    if (products[0]===undefined) {
        return <p>Brak produktów</p>
    }
    
    return (
        <AllProducts  allProducts={products} productType={products[0].product_type?.type_name} />
    )
}