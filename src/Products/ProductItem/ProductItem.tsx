import { Link } from 'react-router-dom'
import style from './ProductItem.module.css'
import { analyticsEvent } from '../../analytics'

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
    product_type: ProductType | null
}

export const ProductItem = ({id, name, price, photos, product_type}: SmallProductCard) => {

    const productCardClick = () => {
        window.scrollTo(0, 0);
        analyticsEvent("productCard", name);
    }
    return (
        <Link to={`/products/${product_type?.type_name}/${name}?id=${id}`} className={style.itemWrapper} onClick={productCardClick}>
            <div className="photo_wrapper">
                <img className={style.mainImage} src={photos[0]?.photo_link} alt="zdjęcie produkty" />
                <img className={style.hoverImage} src={photos[1]?.photo_link} alt="zdjęcie produktu" />
            </div>
            <p className={style.productName}>{name}</p>
            <p className={style.productPrice}>{price} zł</p>
        </Link>
    )
}