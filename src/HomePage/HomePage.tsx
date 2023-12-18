// export const HomePage = () => {
//     return (
//         <div>
//             Home Page!!!!
//         </div>
//     )
// }

import { useQuery } from "@tanstack/react-query"
import { getProductsForHomePage } from "../api/products"
// import style from "..//Products.module.css";
import style from "./HomePage.module.css";
// import { ProductItem } from "../ProductItem/ProductItem";
import { ProductItem } from "../Products/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Header } from "./Header/Header";

export const HomePage = () => {

    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['HomePageProducts'],
        queryFn: () => getProductsForHomePage()
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
        <div>
            <Header/>
            <div className={style.productsMainWrapper}>
                <h1 className={style.title}>RĘCZNIE ROBIONE SWETRY Z NATURALNYCH WŁÓCZEK</h1>
                <div className={style.productsWrapper}>
                    {allProducts.map(product => {
                        // eslint-disable-next-line
                        //@ts-ignore
                        return <ProductItem key={product.id} {...product} />
                    })}
                </div>

                <Link to="/products" className={style.seeAllProducts} onClick={()=>window.scrollTo(0, 0)}>ZOBACZ WSZYSTKIE PRODUKTY</Link>
            </div>
        </div>

    )
}