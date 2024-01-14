import style from './SkeletonProductDetails.module.css'


export const SkeletonProductDetails = () => {

    return (
        <div className={style.skeletonProductCard}>
            <div className={style.skeletonProductWrapper}>
                <div className={style.skeletonPathWrapper}></div>
                <div className={style.skeletonTopWrapper}>
                    <div className={style.skeletonTopWrapperWrapper}>
                        <div className={style.skeletonPhotosWrapper}>
                            <div className={style.skeletonMainPhoto}></div>
                            <div className={style.skeletonCarousel}></div>
                        </div>
                        <div className={style.skeletonDetailsWrapper}>
                            <div className={style.skeletonNameAndPrice}>
                                <div className={style.skeletonProductName}></div>
                                <div className={style.skeletonProductPrice}></div>
                            </div>
                            <div className={style.skeletonCompositionDescription}></div>
                            <div className={style.skeletonComposition}></div>
                            <div className={style.skeletonDescriptionTextWrapper}>
                                <div className={style.skeletonDescription}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                            </div>
                            <div>
                                <div className={style.skeletonDescription}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                            </div>
                            <div className={style.skeletonDelivery}>
                                <div className={style.skeletonDescription}></div>
                                <div className={style.skeletonDescriptionText}></div>
                                <div className={style.skeletonDescriptionText}></div>
                            </div>
                            <div className={style.skeletonCta}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}