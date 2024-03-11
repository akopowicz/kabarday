import style from './MainPhotoAndCarousel.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {productType} from '../../../types/types';

export const MainPhotoAndCarousel = ({mainPhoto, productDetails, product, showMainPhotoBig, changePhotoFromSlider }:{mainPhoto:string, productDetails: productType[], product: productType, showMainPhotoBig: ()=>void, changePhotoFromSlider: (newPhoto:string)=>void  }) => { 
    return (
        <div className={style.photosWrapper}>
                            <div className={style.mainPhotoWrapper}>

                                <img src={mainPhoto
                                } alt="" className={style.mainPhoto} onClick={showMainPhotoBig} />
                            </div>
                            <CarouselProvider step={3}
                                visibleSlides={3}
                                naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                totalSlides={(productDetails[0].photos.length - 1)} className={style.carousel}
                            >
                                <Slider className={style.slider}  >
                                    {product.photos.filter(photo => photo.photo_link !== mainPhoto).map((filterPhoto, index) => (
                                        <Slide index={index} className={style.smallImageWrapper} key={filterPhoto.id}>
                                            <img className={style.smallImage} onClick={()=>changePhotoFromSlider(filterPhoto.photo_link)} src={filterPhoto.photo_link} alt="" />
                                        </Slide>
                                    ))}
                                </Slider>
                                <ButtonBack className={`${style.carouselArrow} ${style.arrowBack}`} ><ArrowBackIcon />
                                </ButtonBack>
                                <ButtonNext className={`${style.carouselArrow} ${style.arrowNext}`} ><ArrowForwardIcon /></ButtonNext>
                            </CarouselProvider>
                        </div>
    )
}