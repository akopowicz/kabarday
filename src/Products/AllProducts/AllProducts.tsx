import style from "./AllProducts.module.css";
import { ProductItem } from "../ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Sorting } from "../../Sorting/Sorting";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Photos = {
    product_id: string,
    id: string,
    photo_link: string,
}
type ProductType = { type_name: string; id: string; }

type ProductCard = {
    id: string;
    name: string;
    price: number | null;
    photos: Photos[],
    product_type: ProductType | null
}

export default function AllProducts(props: { allProducts: ProductCard[], productType: string|undefined }) {
   
    return (
        <div className={`mainWrapper ${style.mainWrapper}`}>
            <div className={style.productNavigationWrapper}>
                <div className={style.pathWrapper}>
                    <Link to='/'>Strona Główna</Link>
                    <KeyboardArrowRightIcon className={style.arrow} />
                    <Link to="/products">Produkty</Link>
                    {props.productType !== undefined ? <div className={style.productType}><KeyboardArrowRightIcon className={style.arrow} /><p>{props.productType}</p></div> : null}
                </div>
                <Sorting />
            </div>
            <div className={style.productsMainWrapper}>
                <div className={style.productsWrapper}>
                    {props.allProducts.map(product => {
                        return <ProductItem key={product.id} {...product} />
                    })}
                </div>
            </div>
        </div>

    )
}