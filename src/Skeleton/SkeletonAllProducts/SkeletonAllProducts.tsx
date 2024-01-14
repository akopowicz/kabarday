import { SkeletonProductCard } from '../SkeletonProductCard/SkeletonProductCard';
import style from './SkeletonAllProducts.module.css';

export const SkeletonAllProducts = () => {
    return (
        <div className={style.skeletonAllProductsWrapper}>
            <div className={style.skeletonNavigationWrapper}>
                <div className={style.skeletonTopNavigation}></div>
                <div className={style.skeletonSort}></div>
            </div>

            {

                [...Array(8)].map((element, index) => {
                    return <SkeletonProductCard key={`element` + index + element} />
                })
            }
        </div>
    )
}