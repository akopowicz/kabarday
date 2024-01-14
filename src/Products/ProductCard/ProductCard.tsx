import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { getProduct, getSimilarProducts } from "../../api/products";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import style from './ProductCard.module.css'
import { useEffect, useState } from "react";
import { SimilarProducts } from "../SimilarProducts/SimilarProducts";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BigPhoto } from "./BigPhoto/BigPhoto";
import { useProductsContext } from "../../Context/ProductsContextProvider";
import { analyticsEvent } from "../../analytics";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SkeletonProductDetails } from "../../Skeleton/SkeletonProductDetails/SkeletonProductDetails";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ProductCard() {
    const location = useLocation();
    const id = location.search.split("=")[1]
    const [avaliableColors, setAvaliableColors] = useState<boolean>(false)
    const [howToOrder, setHowToOrder] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false);
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

    return (
        <div className={style.productCard}>
            <div className={style.productWrapper}>
                <div className={style.pathWrapper}><Link to="/" className={style.pathLink}>Strona Główna</Link><KeyboardArrowRightIcon className={style.arrow} /><Link to="/Products">Produkty</Link><KeyboardArrowRightIcon className={style.arrow} /><Link to={`/products/${product.product_type?.type_name}`} state={product.product_type?.id} className={style.pathLink}>{product.product_type?.type_name}</Link><KeyboardArrowRightIcon className={style.arrow} /><span className={style.pathLink}>{product.name}</span></div>
                <div className={style.topWrapper}>
                    <div className={style.topWrapperWrapper}>
                        <div className={style.photosWrapper}>
                            <div className={style.mainPhotoWrapper}>

                                <img src={mainPhoto
                                } alt="" className={style.mainPhoto} onClick={showMainPhotoBig} />
                            </div>
                            <CarouselProvider
                                visibleSlides={3}
                                naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                totalSlides={(productDetails[0].photos.length - 1)} className={style.carousel}
                            >
                                <Slider className={style.slider}  >
                                    {product.photos.filter(photo => photo.photo_link !== mainPhoto).map((filterPhoto, index) => (
                                        <Slide index={index} className={style.smallImageWrapper} key={filterPhoto.id}>
                                            <img className={style.smallImage} onClick={()=>changeMainPhoto(filterPhoto.photo_link)} src={filterPhoto.photo_link} alt="" />
                                        </Slide>
                                    ))}
                                </Slider>
                                <ButtonBack className={`${style.carouselArrow} ${style.arrowBack}`} ><ArrowBackIcon />
                                </ButtonBack>
                                <ButtonNext className={`${style.carouselArrow} ${style.arrowNext}`} ><ArrowForwardIcon /></ButtonNext>
                            </CarouselProvider>
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
                                <div className={style.descriptionTextWrapper}>
                                    <h3 className={style.description}>Opis:</h3>
                                    <p className={style.descriptionText}>{product.description}</p>
                                    <p>Wymiary:</p>
                                    <p>Długość: {product.measurements[0]?.length}cm</p>
                                    <p>Szerokość: {product.measurements[0]?.width}cm</p>
                                    <p>Długość rękawów: {product.measurements[0]?.sleeve_length}cm</p>
                                </div>
                                <div>
                                    <div className={style.descriptionMore} onClick={() => {
                                        setAvaliableColors(!avaliableColors)
                                    }}>
                                        <h3 className={style.colors}>Dostępne kolory:</h3>
                                        {avaliableColors ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className={style.descriptionMoreArrow} />}
                                    </div>
                                    <p className={`${style.colorsText} ${avaliableColors ? style.showText : ""}`}>Kolory w których występuje dana włóczka przedstawione są na zdjęciu. W zależności od parametrów wyświetlacza kolory mogą różnić się od faktycznego ich wyglądu. Dostępność kolorów może różnić się od faktycznej dostępności w danym momencie.</p>
                                </div>
                                <div className={style.delivery}>
                                    <div className={style.descriptionMore} onClick={() => {
                                        setHowToOrder(!howToOrder)
                                    }}>
                                        <h3>Sposób skladania zmównienia:</h3>
                                        {howToOrder ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className={style.descriptionMoreArrow} />}
                                    </div>
                                    <p className={`${style.deliveryText} ${howToOrder ? style.showText : ""}`}>W celu złożenia zamówienia napisz do nas wiadomość na adres mailowy: <a className={style.mail} href="mailto:info.kabarday@gmail.com">info.kabarday@gmail.com</a></p>
                                </div>
                                <div className={style.time}>
                                    <div className={style.descriptionMore} onClick={() => {
                                        setOrder(!order)
                                    }}> <h3>Czas realizacji zamówienia:</h3>
                                        {order ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className={style.descriptionMoreArrow} />}
                                    </div>
                                    <p className={`${style.orderText} ${order ? style.showText : ""}`}>Po zaksięgowaniu wpłaty za zamówienie czas realizacji wynosi od 5 do 21 dni</p>
                                </div>
                                <a href={`mailto:info.kabarday@gmail.com?subject=${product.name}`} className={style.order} onClick={() => { analyticsEvent("cta", `order_${product.name}`) }}>Zamów</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.more}>
                    <h2 className={style.h2}>Może Ci się spodobać:</h2>
                    <div className={style.moreWrapper}>
                        {similarProducts?.map(similar => (
                            <SimilarProducts key={"similar" + similar.id} {...similar} />
                        ))}
                    </div>
                </div>
            </div>
            {showBigPhoto ? <BigPhoto mainPhoto={mainPhoto} allPhotos={product.photos.filter(photo => photo.photo_link !== mainPhoto)} /> : ""}
        </div>
    )
}