import { Link } from "react-router-dom"
import style from './SimilarProducts.module.css'

type Photos = {
    product_id: string,
    id: string,
    photo_link: string,
}

type ProductType = { type_name: string; id: string; } | null

type SmallProductCard = {
    id: string,
    name: string,
    price: number | null,
    photos: Photos[],
    product_type: ProductType
}

export const SimilarProducts = ({ id, name, price, photos, product_type }: SmallProductCard) => {
    // console.log(})
    console.log(photos)

    if(!product_type){
        return null;
    }

    return (
        <Link to={`/products/${product_type.type_name}/${name}?id=${id}`} className={style.itemWrapper} onClick={()=>window.scrollTo(0, 0)}>
            <div className={style.photo_wrapper}>
                <img className={style.mainImage} src={photos[0]?.photo_link} alt="zdjęcie produkty" />
                <img className={style.hoverImage} src={photos[1]?.photo_link} alt="zdjęcie produktu" />
            </div>
            <div className={style.inscriptionWrapper}>
                <div className={style.topInscription}>
                <p className={style.productName}>{name}</p>
                <p className={style.productPrice}>{price} zł</p>
                </div>
               
                <button className={style.seeMore}>Zobacz</button>
            </div>

        </Link>
    )
}