import { useLocation } from "react-router-dom";
import style from './ProductType.module.css';
import { getProductsWithType } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "../ProductItem/ProductItem";

export const ProductType = () => {
    const location = useLocation();
    const typeId = location.state

    const { isLoading, error, data: products } = useQuery({
        queryKey: ['searchProductsByType', typeId],
        queryFn: () => getProductsWithType(typeId)
    })

    if (error) {
        return <p>Cannot get products</p>
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (products === undefined || products === null) {
        return <p>Spróbuj ponownie</p>
    }
    
    console.log(products)
    return (
        <div className={style.productsMainWrapper}>
             {/* <div className={style.pathWrapper}><Link to="/products">Produkty</Link></div> */}
            <div className={style.productsWrapper}>
                {products.map(product=>(
                     <ProductItem key={product.id} {...product} />
                ))}
                {/* {products.map(product => {
                    return <ProductType key={product.id} {...product} />
                })} */}
            </div>
        </div>
    )
}