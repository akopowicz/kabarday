import { useEffect, useState } from 'react';
import style from './BigPhoto.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ImageMagnifier } from '../ImageMagnifier/ImageMagnifier';
import { useProductsContext } from '../../../Context/ProductsContextProvider';

type allPhotosType = {
  id: string,
  photo_link: string,
  product_id: string,
}

export const BigPhoto = ({ mainPhoto, allPhotos }: { mainPhoto: string, allPhotos: allPhotosType[] }) => {
    const { setShowBigPhoto } = useProductsContext()
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const slider = document.getElementById('mySlider');
  
    window.addEventListener('resize', handleWindowSizeChange);
    if (slider) {
      slider.focus();
    }


    const handleKeyDown = () => {
      if (slider) {
        slider.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);


  }, []);


    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  const hideBigPhoto = () => {
    setShowBigPhoto(false)
  }

  return (
    <>
    <div className={style.bigPhotoWrapper}>
      <div className={style.imageWrapper} id='imageWrapper'>
      <CarouselProvider
        naturalSlideWidth={1280}
        naturalSlideHeight={1920}
        totalSlides={allPhotos.length + 1}
        visibleSlides={1}
      >
        <Slider id="mySlider">
          <Slide index={0} className={style.photoSlider}>{isMobile? <img src={mainPhoto} alt="" className={style.photo} id="mainPhoto"/> : <ImageMagnifier src={mainPhoto}/>}</Slide>
          {allPhotos.map((filterPhoto, index) => (
            <Slide index={index} className={style.smallImageWrapper} key={filterPhoto.id}>
            {isMobile? <img src={filterPhoto.photo_link} alt="" className={style.photo} /> : <ImageMagnifier src={filterPhoto.photo_link}/>}
                                        </Slide>
                                    ))}
        </Slider>
        <ButtonBack className={`${style.carouselArrow} ${style.arrowBack}`} ><ArrowBackIcon />
                                </ButtonBack>
                                <ButtonNext className={`${style.carouselArrow} ${style.arrowNext}`} ><ArrowForwardIcon /></ButtonNext>
      </CarouselProvider>
      </div>
     
      <CloseIcon sx={{ boxShadow: 3 }} className={style.closeIcon} onClick={hideBigPhoto} />
    </div>
    </>
  )
}