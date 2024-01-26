import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import AllProducts from "../AllProducts/AllProducts";
import { useUserProductsContext } from "../../Context/UserProductsContextProvider";
import { SkeletonAllProducts } from "../../Skeleton/SkeletonAllProducts/SkeletonAllProducts";
import { useProductsContext } from '../../Context/ProductsContextProvider';

import { Sorting } from "../../Sorting/Sorting";
import { Quality } from "../Quality/Quality";
import style from "./ProductType.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ROUTES } from "../../constants";

export const ProductType = () => {
    const location = useLocation();
    const typeId = location.search.split("=")[1]
    const { sortType } = useUserProductsContext();
    const { quality } = useProductsContext();


    console.log("typeId", typeId)
    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products', typeId, sortType.column, sortType.ascendic, quality],
        queryFn: () => getProducts("", "", sortType.column, sortType.ascendic, typeId, quality),
    })

    console.log(location.pathname)

    if (error) {
        return <p>Cannot get products</p>
    }

    if (isLoading) {
        return <SkeletonAllProducts />
    }

    if (products === undefined || products === null) {
        return <p>Spróbuj ponownie</p>
    }

    if (products[0] === undefined) {
        return (
        <div className={`mainWrapper ${style.mainWrapper}`}>
            <div className={style.productNavigationWrapper}>
                <div className={style.pathWrapper}>
                    <Link to='/'>Strona Główna</Link>
                    <KeyboardArrowRightIcon className={style.arrow} />
                    <Link to={ROUTES.products}>Produkty</Link>

                </div>
                <div className={style.sortingWrapper}>
                    <Sorting />
                    <Quality />
                </div>
            </div>
            <p className={style.notFound}>Nie znaleziono produktu</p>
        </div>
)
    }

    return (
        <AllProducts allProducts={products} productType={products[0].product_type?.type_name} />
    )
}