// import { useEffect, useState, useCallback } from 'react';
// import { useProductsContext } from '../../../Context/ProductsContextProvider';
import { useEffect, useState } from 'react';
import style from './BigPhoto.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { ImageMagnifier } from '../ImageMagnifier/ImageMagnifier';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ImageMagnifier } from '../ImageMagnifier/ImageMagnifier';
import { useProductsContext } from '../../../Context/ProductsContextProvider';


type allPhotosType = {
  id: string,
  photo_link: string,
  product_id: string,
}

// export const BigPhoto = ({ mainPhoto, allPhotos }: { mainPhoto: string, allPhotos: allPhotosType[] }) => {
//   const { setShowBigPhoto } = useProductsContext()
//   const [mainPhotoId, setMainPhotoId] = useState(0);
//   const [photoToShow, setPhotoToShow] = useState(mainPhoto)
//   const [width, setWidth] = useState<number>(window.innerWidth);

//   function handleWindowSizeChange() {
//       setWidth(window.innerWidth);
//   }

//   const nextPhoto = useCallback(() => {
//     console.log(mainPhotoId)
//     if (mainPhotoId < allPhotos.length) {
//       setPhotoToShow(allPhotos[mainPhotoId].photo_link)
//       setMainPhotoId(prev => prev + 1)
//     }

//   },[allPhotos,mainPhotoId])

//   const prevPhoto = useCallback(() => {
//     console.log(mainPhotoId)
//     if (mainPhotoId > 1 && mainPhotoId !==allPhotos.length) {

//       setPhotoToShow(allPhotos[mainPhotoId-2].photo_link)
//       setMainPhotoId(prev => prev - 1)

//     } else if (mainPhotoId === 1) {
//       setPhotoToShow(mainPhoto)
//       setMainPhotoId(0)
//     } else if (mainPhotoId === 0) {
//       setMainPhotoId(0)
//     }
//     else {
//       setPhotoToShow(allPhotos[allPhotos.length-2].photo_link) 
//       setMainPhotoId(prev => prev - 1)
//     }

//   },[mainPhoto,allPhotos,mainPhotoId])


//   useEffect(() => {
//     window.addEventListener('resize', handleWindowSizeChange);
//     const handleKeyDown = (e: { key: string; }) => {
//       if(e.key === 'ArrowRight') {
//         console.log(e.key)
//         nextPhoto()


//       } else if(e.key === 'ArrowLeft') {
//         console.log(e.key)
//         prevPhoto()
//       }
//     }

//     document.addEventListener('keydown', handleKeyDown);

//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [nextPhoto,prevPhoto]); 

//   const isMobile = width <= 768;



//   return (
//     <div className={style.bigPhotoWrapper}>
//       <div className={style.imageWrapper}>
//         {isMobile? <img src={photoToShow} alt="" className={style.photo} /> : <ImageMagnifier src={photoToShow}/>}
//       {/* <ImageMagnifier src={photoToShow}/> */}
//         {/* <img src={photoToShow} alt="" className={style.photo} /> */}
//       </div>
//       <CloseIcon className={style.closeIcon} onClick={() => setShowBigPhoto(false)} />
//       < ArrowBackIosIcon className={`${style.arrowBackIcon} ${mainPhotoId === 0 ? style.displayNone : ""}`} onClick={() => prevPhoto()} />
//       <ArrowForwardIosIcon className={`${style.arrowForwardIcon} ${mainPhotoId < allPhotos.length ? "" : style.displayNone}`} onClick={() => nextPhoto()} />

//     </div>
//   )
// }



export const BigPhoto = ({ mainPhoto, allPhotos }: { mainPhoto: string, allPhotos: allPhotosType[] }) => {
    const { setShowBigPhoto } = useProductsContext()
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const slider = document.getElementById('mySlider');
  
    //  `${(window.innerHeight-100)/1,5}px`
 
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
    document.body.style.overflowY = 'auto';
  }

  return (
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
          {/* <Slide index={0}><ImageWithZoom src={mainPhoto} alt="" className={style.photo} /></Slide> */}
         
          {allPhotos.map((filterPhoto, index) => (
            <Slide index={index} className={style.smallImageWrapper} key={filterPhoto.id}>
            {/* <img className={style.smallImage} src={filterPhoto.photo_link} alt="" /> */}
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
  )
}