import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../api/products"
import style from "./AllProducts.module.css";
import { ProductItem } from "../ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Sorting } from "../../Sorting/Sorting";
import { useUserProductsContext } from "../../Context/UserProductsContextProvider";
// import { useLocation } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function AllProducts(props) {
    const { sortType } = useUserProductsContext();

    console.log(sortType)
   
    console.log(props.allProducts)
    // const { isLoading, error, data: allProducts } = useQuery({
    //     queryKey: ['products', sortType.column, sortType.ascendic],
    //     queryFn: () => getProducts("", "", sortType.column, sortType.ascendic),
    // })

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    // if (error) {
    //     return <p>Wystąpił błąd</p>
    // }

    // if (allProducts === undefined || allProducts === null) {
    //     return <p>Spróbuj ponownie</p>
    // }

    // console.log(allProducts)

    // console.log(allProducts)

    console.log(props.productType)

    return (
        <div className={`mainWrapper ${style.mainWrapper}`}>
            <div className={style.productNavigationWrapper}>
                <div className={style.pathWrapper}>
                    <Link to='/'>Strona Główna</Link>
                    <KeyboardArrowRightIcon className={style.arrow} />
                    <Link to="/products">Produkty</Link>
                    {props.productType !==undefined ?  <div className={style.productType}><KeyboardArrowRightIcon className={style.arrow} /><p>{props.productType}</p></div>    : null}
                </div>
            <Sorting />
            </div>
            <div className={style.productsMainWrapper}>
                {/* <div className={style.pathWrapper}><Link to="/products">Produkty</Link></div> */}
                <div className={style.productsWrapper}>
                    {props.allProducts.map(product => {
                        return <ProductItem key={product.id} {...product} />
                    })}
                </div>
            </div>
        </div>

    )
}