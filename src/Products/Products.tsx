import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
import { useUserProductsContext } from "../Context/UserProductsContextProvider";
import { SkeletonAllProducts } from "../Skeleton/SkeletonAllProducts/SkeletonAllProducts";
import AllProducts from "./AllProducts/AllProducts";
import { useProductsContext } from '../Context/ProductsContextProvider';

export default function Products() {
    const { sortType } = useUserProductsContext();
    const {quality} = useProductsContext();
    const typeId = "all"

    

    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['products', typeId, sortType.column, sortType.ascendic, quality],
        queryFn: () => getProducts("", "", sortType.column, sortType.ascendic, typeId, quality),
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