import { SimilarProducts } from "../../SimilarProducts/SimilarProducts";
import style from "./MoreSimilarProducts.module.css";
type Photos = {
    product_id: string,
    id: string,
    photo_link: string,
}

type ProductType = { type_name: string; id: string; } | null

type MoreSimilarProductsType = {
    id: string,
    name: string,
    price: number | null,
    photos: Photos[],
    product_type: ProductType
}
export const MoreSimilarProducts = ({similarProducts}:{similarProducts: MoreSimilarProductsType[]}) => {
    console.log(similarProducts)
    return(
        <div className={style.more}>
                    <h2 className={style.h2}>Może Ci się spodobać:</h2>
                    <div className={style.moreWrapper}>
                        {similarProducts?.map(similar => (
                            <SimilarProducts key={"similar" + similar.id} {...similar} />
                        ))}
                    </div>
                </div>
    )
}