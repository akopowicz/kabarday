import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { getProduct, getSimilarProducts } from "../../api/products";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import style from './ProductCard.module.css'
import { useEffect, useState } from "react";
import { SimilarProducts } from "../SimilarProducts/SimilarProducts";

export const ProductCard = () => {
    const location = useLocation();
    const id = location.state


    // const queryParameters = new URLSearchParams(location.search)


    console.log("bla")

    const [mainPhoto, setMainPhoto] = useState('')

    const { isLoading, error, data: productDetails } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id)
    })

    const { isLoading: loadingSimilar, error: errorSimilar, data: similarProducts } = useQuery({
        queryKey: ['similarProducts', id],
        queryFn: () => getSimilarProducts(id)
    })

    console.log(similarProducts)

    useEffect(() => {
        console.log(productDetails)
        if (productDetails) {
            setMainPhoto(productDetails[0].photos[0].photo_link)
        }

    }, productDetails)

    if (isLoading || loadingSimilar) {
        return <p>Loading...</p>;
    }

    if (error || errorSimilar) {
        return <p>Wystąpił błąd</p>
    }

    if (productDetails === undefined || productDetails === null) {
        return <p>Spróbuj ponownie</p>
    }

    console.log(productDetails)

    const product = productDetails[0]

    // if (productDetails) {

    //     setMainPhoto(productDetails[0].photos[0].photo_link) 
    // }

    // setMainPhoto(productDetails[0].photos[0].photo_link)

    const changeMainPhoto = (photoSrc: string) => {
        setMainPhoto(photoSrc)
    }


    console.log(product.photos)
    return (
        <div className={style.productCard}>
            <div className={style.productWrapper}>
                <div className={style.pathWrapper}><Link to="/Products">Produkty</Link><KeyboardArrowRightIcon className={style.arrow} /><Link to={`/products/${product.product_type?.type_name}`} state={product.product_type?.id}>{product.product_type?.type_name}</Link><KeyboardArrowRightIcon className={style.arrow} /><span>{product.name}</span></div>
                <div className={style.topWrapper}>
                    <div className={style.topWrapperWrapper}>
                        <div className={style.photosWrapper}>
                            <div className={style.mainPhotoWrapper}>

                                <img src={mainPhoto
                                } alt="" className={style.mainPhoto} />
                            </div>

                            <div className={style.smallPhotosWrapper}>
                                <div className={style.smallPhotos}>
                                    {product.photos.filter(photo => photo.photo_link !== mainPhoto).map(filterPhoto => (
                                        <div className={style.smallImageWrapper} key={filterPhoto.id}>
                                            <img className={style.smallImage} onClick={() => { changeMainPhoto(filterPhoto.photo_link) }} src={filterPhoto.photo_link} alt="" />
                                        </div>

                                    ))}
                                </div>

                            </div>
                            {/* <div>
                            {product.photos.filter(photo=>photo.photo_type.includes("detail")).map(filterPhoto=>(
                                <img key={filterPhoto.id} src={filterPhoto.photo_link} />
                            ))}
                       
                       
                        </div> */}
                        </div>
                        <div className={style.detailsWrapper}>
                            <div className={style.nameAndPrice}>
                                <h2 className={style.productName}>{product.name}</h2>
                                <p className={style.productPrice}>{product.price} zł</p>
                            </div>
                            <div className={style.descriptionWrapper}>
                                <ul className={style.compositionDescription}>Skład:
                                    <li className={style.composition}>{product.composition}</li>
                                </ul>
                                <div>
                                    <h3 className={style.description}>Opis:</h3>
                                    <p className={style.descriptionText}>{product.description}</p>
                                </div>
                                <div className={style.delivery}><h3>Sposób skladania zmównienia</h3>
                                    <p>Zamówienie składa się.... </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={style.more}>
                    <h2 className={style.h2}>Może Ci się spodobać:</h2>
                    <div className={style.moreWrapper}>
                        {similarProducts?.map(similar => (
                            <SimilarProducts {...similar} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}