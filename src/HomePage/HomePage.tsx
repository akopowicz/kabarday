import { useQuery } from "@tanstack/react-query"
import { getProductsForHomePage } from "../api/products"
import style from "./HomePage.module.css";
import { ProductItem } from "../Products/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Header } from "./Header/Header";
import {analyticsEvent} from '../analytics'
import { SkeletonHomePage } from "../Skeleton/SkeletonHomePage/SkeletonHomePage";

export const HomePage = () => {

    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['HomePageProducts'],
        queryFn: () => getProductsForHomePage()
    })

    if (isLoading) {
        return <SkeletonHomePage/>
    }

    if (error) {
        return <p>Wystąpił błąd</p>
    }

    if (allProducts === undefined || allProducts === null) {
        return <p>Spróbuj ponownie</p>
    }

    const allProductsCtaClick = () => {
        window.scrollTo(0, 0);
        analyticsEvent("cta", "secondary_cta");
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

                <Link to="/products" className={style.seeAllProducts} onClick={allProductsCtaClick}>ZOBACZ WSZYSTKIE PRODUKTY</Link>
            </div>
        </div>

    )
}