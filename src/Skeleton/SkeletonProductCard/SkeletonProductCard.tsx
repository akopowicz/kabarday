import style from './SkeletonProductCard.module.css';

export const SkeletonProductCard = () => {

    return (
        <div className={`${style.skeletonCardWrapper}`}>
            <div className={style.skeletonImage}></div>
            <div className={style.skeletonProductName}></div>
            <div className={style.skeletonProductPrice}></div>
        </div>
    )
}