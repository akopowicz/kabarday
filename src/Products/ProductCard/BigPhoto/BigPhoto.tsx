import { useEffect, useState, useCallback } from 'react';
import { useProductsContext } from '../../../Context/ProductsContextProvider';
import style from './BigPhoto.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ImageMagnifier } from '../ImageMagnifier/ImageMagnifier';

type allPhotosType = {
  id: string,
  photo_link: string,
  product_id: string,
}

export const BigPhoto = ({ mainPhoto, allPhotos }: { mainPhoto: string, allPhotos: allPhotosType[] }) => {
  const { setShowBigPhoto } = useProductsContext()
  const [mainPhotoId, setMainPhotoId] = useState(0);
  const [photoToShow, setPhotoToShow] = useState(mainPhoto)
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  
  const nextPhoto = useCallback(() => {
    console.log(mainPhotoId)
    if (mainPhotoId < allPhotos.length) {
      setPhotoToShow(allPhotos[mainPhotoId].photo_link)
      setMainPhotoId(prev => prev + 1)
    }
     
  },[allPhotos,mainPhotoId])

  const prevPhoto = useCallback(() => {
    console.log(mainPhotoId)
    if (mainPhotoId > 1 && mainPhotoId !==allPhotos.length) {
      
      setPhotoToShow(allPhotos[mainPhotoId-2].photo_link)
      setMainPhotoId(prev => prev - 1)

    } else if (mainPhotoId === 1) {
      setPhotoToShow(mainPhoto)
      setMainPhotoId(0)
    } else {
      setPhotoToShow(allPhotos[allPhotos.length-2].photo_link) 
      setMainPhotoId(prev => prev - 1)
    }
    
  },[mainPhoto,allPhotos,mainPhotoId])


  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    const handleKeyDown = (e: { key: string; }) => {
      if(e.key === 'ArrowRight') {
        console.log(e.key)
        nextPhoto()
       
       
      } else if(e.key === 'ArrowLeft') {
        console.log(e.key)
        prevPhoto()
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextPhoto,prevPhoto]); 

  const isMobile = width <= 768;

  

  return (
    <div className={style.bigPhotoWrapper}>
      <div className={style.imageWrapper}>
        {isMobile? <img src={photoToShow} alt="" className={style.photo} /> : <ImageMagnifier src={photoToShow}/>}
      {/* <ImageMagnifier src={photoToShow}/> */}
        {/* <img src={photoToShow} alt="" className={style.photo} /> */}
      </div>
      <CloseIcon className={style.closeIcon} onClick={() => setShowBigPhoto(false)} />
      < ArrowBackIosIcon className={`${style.arrowBackIcon} ${mainPhotoId === 0 ? style.displayNone : ""}`} onClick={() => prevPhoto()} />
      <ArrowForwardIosIcon className={`${style.arrowForwardIcon} ${mainPhotoId < allPhotos.length ? "" : style.displayNone}`} onClick={() => nextPhoto()} />
   
    </div>
  )
}

