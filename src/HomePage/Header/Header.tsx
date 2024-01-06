import { useEffect, useState } from 'react';
import style from './Header.module.css'
import { Link } from 'react-router-dom';
// import ReactGA from "react-ga4";
import { analyticsEvent } from '../../analytics';

export const Header = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        // return () => {
        //     window.removeEventListener('resize', handleWindowSizeChange);
        // }
    }, []);

    const isMobile = width <= 768;

    // const analyticsEvent = () => {
    //     ReactGA.event({
    //         category: "cta",
    //         action: "mainCta",
    //         label: "mainCta",
    //       });
    // }


    return (
        <div className={style.headerWrapper}>
            {isMobile ? <img src="/hero-mobile.webp" alt="hero image" className={style.heroImage} /> : <img src="/hero-desktop.webp" alt="hero image" className={style.heroImage} />}
            <Link to="/products" onClick={() => analyticsEvent("cta", "main_cta")} className={style.seeAllProducts}>ZOBACZ WSZYSTKIE PRODUKTY</Link>
        </div>
    )
}