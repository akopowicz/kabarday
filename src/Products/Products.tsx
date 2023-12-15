import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
import style from "./Products.module.css";
import { ProductItem } from "./ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Sorting } from "../Sorting/Sorting";
import { useUserProductsContext } from "../Context/UserProductsContextProvider";
// import { useLocation } from "react-router-dom";

export default function Products() {
    const { sortType } = useUserProductsContext();

    console.log(sortType)
    // const location = useLocation();
    // const typeId = location.state;
    // console.log(typeId)
    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['products', sortType.column, sortType.ascendic],
        queryFn: () => getProducts("", "", sortType.column, sortType.ascendic),
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
        <div className={`mainWrapper ${style.mainWrapper}`}>
            <Sorting />
            <div className={style.productsMainWrapper}>
                {/* <div className={style.pathWrapper}><Link to="/products">Produkty</Link></div> */}
                <div className={style.productsWrapper}>
                    {allProducts.map(product => {
                        return <ProductItem key={product.id} {...product} />
                    })}
                </div>
            </div>
        </div>

    )
}