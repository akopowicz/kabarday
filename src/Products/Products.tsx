import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
import style from "./Products.module.css";
import { ProductItem } from "./ProductItem/ProductItem";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export const Products = () => {
    // const location = useLocation();
    // const typeId = location.state;
    // console.log(typeId)
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

    console.log(allProducts)


    return (
        <div className={style.productsMainWrapper}>
             {/* <div className={style.pathWrapper}><Link to="/products">Produkty</Link></div> */}
            <div className={style.productsWrapper}>
                {allProducts.map(product => {
                    return <ProductItem key={product.id} {...product} />
                })}
            </div>
        </div>
    )
}