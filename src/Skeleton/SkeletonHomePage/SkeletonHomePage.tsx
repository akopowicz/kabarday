import style from './SkeletonHomePage.module.css'
export const SkeletonHomePage = () => {
 return (
    <div className={style.homePageWrapper}>
        <div className={style.heroImage}></div>
        <div className={style.seeAllProducts}>ZOBACZ WSZYSTKIE PRODUKTY</div>
    </div>
 )
}