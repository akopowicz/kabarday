import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
import style from "./Products.module.css";
import { ProductItem } from "./ProductItem/ProductItem";

export const Products = () => {

    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts()
    })

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Wystąpił błąd</p>
    }

    if (allProducts === undefined || allProducts === null) {
        return <p>Spróbuj ponownie</p>
    }


    return (
        <div className={style.productsMainWrapper}>
            <div className={style.productsWrapper}>
                {allProducts.map(product => {
                    return <ProductItem key={product.id} {...product} />
                })}
            </div>
        </div>
    )
}