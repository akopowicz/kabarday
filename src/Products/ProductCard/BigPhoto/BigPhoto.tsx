import { useEffect, useState } from 'react';
import { useProductsContext } from '../../../Context/ProductsContextProvider';
import style from './BigPhoto.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type allPhotosType = {
  id: string,
  photo_link: string,
  product_id: string,
}

export const BigPhoto = ({ mainPhoto, allPhotos }: { mainPhoto: string, allPhotos: allPhotosType[] }) => {
  const { setShowBigPhoto } = useProductsContext()
  const [mainPhotoId, setMainPhotoId] = useState(0);
  const [photoToShow, setPhotoToShow] = useState(mainPhoto)

  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if(e.key === 'ArrowRight') {
        console.log(e.key)
       
       
       
      } else if(e.key === 'ArrowLeft') {
        console.log(e.key)
       
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []); 


  const nextPhoto = () => {
      setPhotoToShow(allPhotos[mainPhotoId].photo_link)
      setMainPhotoId(prev => prev + 1)
  }

  const prevPhoto = () => {
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
    
  }

  return (
    <div className={style.bigPhotoWrapper}>
      <div className={style.imageWrapper}>
        <img src={photoToShow} alt="" className={style.photo} />
      </div>
      <CloseIcon className={style.closeIcon} onClick={() => setShowBigPhoto(false)} />
      < ArrowBackIosIcon className={`${style.arrowBackIcon} ${mainPhotoId === 0 ? style.displayNone : ""}`} onClick={() => prevPhoto()} />
      <ArrowForwardIosIcon className={`${style.arrowForwardIcon} ${mainPhotoId < allPhotos.length ? "" : style.displayNone}`} onClick={() => nextPhoto()} />
    </div>
  )
}

