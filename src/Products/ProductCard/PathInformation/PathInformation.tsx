import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import style from './PathInformation.module.css'
import {productType} from '../../../types/types';
import {ROUTES} from "../../../constants";

export const PathInformation = ({product}: {product: productType}) => {
    console.log(product)
    return (
        <div className={style.pathWrapper}><Link to="/" className={style.pathLink}>Strona Główna</Link><KeyboardArrowRightIcon className={style.arrow} /><Link to={ROUTES.products}>Produkty</Link><KeyboardArrowRightIcon className={style.arrow} /><Link to={`/products/${product.product_type?.type_name}`} state={product.product_type?.id} className={style.pathLink}>{product.product_type?.type_name}</Link><KeyboardArrowRightIcon className={style.arrow} /><span className={style.pathLink}>{product.name}</span></div>
    )
}