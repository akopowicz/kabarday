import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
import { useUserProductsContext } from "../Context/UserProductsContextProvider";
import { SkeletonAllProducts } from "../Skeleton/SkeletonAllProducts/SkeletonAllProducts";
import AllProducts from "./AllProducts/AllProducts";
import { useLocation } from "react-router-dom";

export default function Products() {
    const { sortType } = useUserProductsContext();
    const typeId = "all"
    const location=useLocation()
    console.log("location",location.pathname.split("/")[1])

    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['products', typeId, sortType.column, sortType.ascendic],
        queryFn: () => getProducts("", "", sortType.column, sortType.ascendic, typeId),
    })

    if (isLoading) {
        return <SkeletonAllProducts />
    }

    if (error) {
        return <p>Wystąpił błąd</p>
    }

    if (allProducts === undefined || allProducts === null) {
        return <p>Spróbuj ponownie</p>
    }

    return (
        <AllProducts allProducts={allProducts} productType={typeId} />
    )
}