import { Link } from "react-router-dom"
import style from './SearchItem.module.css';

// import PhotoType

type PhotoType = {
    photo_link: string
}


export const SearchItem = ({id, name, photos, price }:{id:string, name:string, photos: PhotoType[], price: number}) => {
    return (
        <Link to={`/products/${name}`} state={id} className={style.searchItem}>
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