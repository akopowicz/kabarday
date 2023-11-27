import { Link } from 'react-router-dom'
import style from './ProductItem.module.css'

type Photos = {
    product_id: string,
    id: string,
    photo_link: string,
}

type SmallProductCard = {
    id: string,
    name: string,
    price: number,
    photos: Photos[]
}

export const ProductItem = ({id, name, price, photos}: SmallProductCard) => {
    // console.log(})
    console.log(photos)
    return (
        <Link to={`/products/${name}`} state={id} className={style.itemWrapper}>
            <div className="photo_wrapper">
                <img className={style.mainImage} src={photos[0]?.photo_link} alt="zdjęcie produkty" />
                <img className={style.hoverImage} src={photos[1]?.photo_link} alt="zdjęcie produktu" />
            </div>
            <p className={style.productName}>{name}</p>
            <p className={style.productPrice}>{price} zł</p>
        </Link>
    )
}