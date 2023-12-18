import { Link } from 'react-router-dom'
import style from './ProductItem.module.css'

type Photos = {
    product_id: string,
    id: string,
    photo_link: string,
}

type ProductType = {
    type_name: string,
}

type SmallProductCard = {
    id: string,
    name: string,
    price: number | null,
    photos: Photos[],
    product_type: ProductType
}

export const ProductItem = ({id, name, price, photos, product_type}: SmallProductCard) => {
    // console.log(})
    console.log(photos)
    console.log(product_type)
    return (
        <Link to={`/products/${product_type.type_name}/${name}?id=${id}`} className={style.itemWrapper}>
            <div className="photo_wrapper">
                <img className={style.mainImage} src={photos[0]?.photo_link} alt="zdjęcie produkty" />
                <img className={style.hoverImage} src={photos[1]?.photo_link} alt="zdjęcie produktu" />
            </div>
            <p className={style.productName}>{name}</p>
            <p className={style.productPrice}>{price} zł</p>
        </Link>
    )
}