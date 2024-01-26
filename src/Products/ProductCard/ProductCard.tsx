import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getProduct, getSimilarProducts } from "../../api/products";
import style from './ProductCard.module.css'
import { useEffect, useState } from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BigPhoto } from "./BigPhoto/BigPhoto";
import { useProductsContext } from "../../Context/ProductsContextProvider";
import { SkeletonProductDetails } from "../../Skeleton/SkeletonProductDetails/SkeletonProductDetails";
import { Details } from "./Details/Details";
import { MoreSimilarProducts } from "./MoreSimilarProducts/MoreSimilarProducts";
import { MainPhotoAndCarousel } from "./MainPhotoAndCarousel/MainPhotoAndCarousel";
import { PathInformation } from "./PathInformation/PathInformation";


export default function ProductCard() {
    const location = useLocation();
    const id = location.search.split("=")[1]
    const { showBigPhoto, setShowBigPhoto } = useProductsContext()
    const [mainPhoto, setMainPhoto] = useState('')


   

    const { isLoading, error, data: productDetails } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id)
    })

    

    const { isLoading: loadingSimilar, error: errorSimilar, data: similarProducts } = useQuery({
        queryKey: ['similarProducts', id],
        queryFn: () => getSimilarProducts(id)
    })

    useEffect(() => {
        if (productDetails) {
            setMainPhoto(productDetails[0].photos[0].photo_link)
        }
        
    }, [productDetails])


    if (isLoading || loadingSimilar) {
        return <SkeletonProductDetails />;
    }

    if (error || errorSimilar) {
        return <p>Wystąpił błąd</p>
    }

    if (productDetails === undefined || productDetails === null) {
       
        return <p>Spróbuj ponownie</p>
    }

    const product = productDetails[0]


    const changeMainPhoto = (photoSrc: string) => {
        setMainPhoto(photoSrc)
    }

    const showMainPhotoBig = () => {
        setShowBigPhoto(true)
    }

    const changePhotoFromSlider=(newPhoto:string)=>{
        changeMainPhoto(newPhoto)
    }

    if (similarProducts === undefined || similarProducts === null) {
        return <p>Spróbuj ponownie</p>
    }

    return (
        <div className={style.productCard}>
            <div className={style.productWrapper}>
                <PathInformation product={product} />
                <div className={style.topWrapper}>
                    <div className={style.topWrapperWrapper}>
                        <MainPhotoAndCarousel mainPhoto={mainPhoto} product={product} productDetails={productDetails} showMainPhotoBig={showMainPhotoBig} changePhotoFromSlider={changePhotoFromSlider}/>
                        <Details product={product} />  
                    </div>
                </div>
                <MoreSimilarProducts similarProducts={similarProducts} />
            </div>
            {/* {showBigPhoto ? isMobile ? <BigPhoto mainPhoto={mainPhoto} allPhotos={product.photos.filter(photo => photo.photo_link !== mainPhoto)} /> : <BigPhotoDesktop mainPhoto={mainPhoto} allPhotos={product.photos.filter(photo => photo.photo_link !== mainPhoto)}/> : ""} */}
            {showBigPhoto ?<BigPhoto mainPhoto={mainPhoto} allPhotos={product.photos.filter(photo => photo.photo_link !== mainPhoto)} /> : ""}
        </div>
    )
}