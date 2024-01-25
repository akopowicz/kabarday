import { useQuery } from "@tanstack/react-query"
import { getProductsForHomePage } from "../api/products"
import style from "./HomePage.module.css";
import { ProductItem } from "../Products/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Header } from "./Header/Header";
import { analyticsEvent } from '../analytics'
import { SkeletonHomePage } from "../Skeleton/SkeletonHomePage/SkeletonHomePage";
import { ROUTES } from "../constants";
// import SEO from "../SEO/SEO";
// import { Helmet } from "react-helmet-async";

export const HomePage = () => {

    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['HomePageProducts'],
        queryFn: () => getProductsForHomePage()
    })

    if (isLoading) {
        return <SkeletonHomePage />
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
            {/* <SEO
                title="Ręcznie robione swetry"
                photo="https://ytjymmciwsnouqxdavcc.supabase.co/storage/v1/object/public/kabarday/logo%20_link.png?t=2024-01-23T18%3A41%3A20.812Z"
            /> */}
           
            
            <Header />
            <div className={style.productsMainWrapper}>
                <h1 className={style.title}>RĘCZNIE ROBIONE SWETRY Z NATURALNYCH WŁÓCZEK</h1>
                <div className={style.productsWrapper}>
                    {allProducts.map(product => {
                        return <ProductItem key={product.id} {...product} />
                    })}
                </div>

                <Link to={ROUTES.products} className={style.seeAllProducts} onClick={allProductsCtaClick}>ZOBACZ WSZYSTKIE PRODUKTY</Link>
            </div>
        </div>

    )
}