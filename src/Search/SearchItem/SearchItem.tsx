import { Link } from "react-router-dom"
import style from './SearchItem.module.css';
import { useUserProductsContext } from "../../Context/UserProductsContextProvider";


type PhotoType = {
    photo_link: string
}

type ProductType = {
    type_name: string,
}

export const SearchItem = ({id, name, photos, price, product_type }:{id:string, name:string, photos: PhotoType[], price: number, product_type: ProductType| null}) => {
    const { setUserSearchProducts } = useUserProductsContext();
   
    return (
        <Link to={`/products/${product_type?.type_name}/${name}?id=${id}`} className={style.searchItem} onClick={() => { setUserSearchProducts('') }}>
            <div className={style.searchPhotoWrapper}>
                <img src={photos[0].photo_link} alt="product photo" className={style.productPhoto} />
            </div>
            <div className={style.informationWrapper}>
                <p className={style.name}>{name}</p>
                <p className={style.price}>{price} zł</p>
            </div>
        </Link>
    )
}