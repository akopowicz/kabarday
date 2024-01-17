import { useState } from "react";
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './Navigation.module.css';
import { Search } from "../Search/Search";
import { analyticsEvent } from "../analytics";
import { ROUTES } from "../constants";


export const Navigation = () => {
    const [isHamburgerShown, setIsHamburgerShown] = useState(false);
    const [isSearchBarShown, setIsSearchBarShown] = useState(false);
    const [isProductsCategoriesShown, setIsProductsCategoriesShown] = useState(false);

    const showHamburger = () => {
        setIsHamburgerShown(!isHamburgerShown);
        setIsSearchBarShown(false);
    }

    const showSearch = () => {
        setIsHamburgerShown(false);
        setIsSearchBarShown(!isSearchBarShown);
    }

    const handleMouseEnter = () => {
        setIsProductsCategoriesShown(true);
    };

    const handleMouseLeave = () => {
        setIsProductsCategoriesShown(false);
    };

    const handleProductsHide = () => {
        setIsProductsCategoriesShown(false);
        setIsHamburgerShown(false);
    };

    const navigationAnalyticsEvents = (action:string) => {
        showHamburger();
        analyticsEvent("navigation", action);
    }

    return (
        <nav className={style.navigation}>
            <div className={`mainWrapper ${style.navigationWrapper}`}>
                <a href="/" onClick={()=> analyticsEvent("productCard", "logo_click")} className={style.logoLink}><img src="/logo.svg" alt="logo" className={style.logo} /></a>

                <ul className={`${style.navigationItemsWrapper} ${isHamburgerShown ? style.show : ''}`}>
                    <li>
                        <Link className={style.navigationItem} to={ROUTES.sweaters} onClick={()=>{navigationAnalyticsEvents("navigation_sweter")}} state={'481755e5-a680-4102-85f1-509a35f95404'}>swetry</Link>

                    </li>
                    <li className={`${style.productsItem} ${style.productsItemPraducts}`}>
                        <div className={style.productsWrapper} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <Link className={`${style.navigationItem} ${style.navigationProducts}`} to={ROUTES.products} onClick={handleProductsHide}>produkty</Link>
                            <KeyboardArrowDownIcon />
                        </div>
                        <ul className={`${style.productsCategory} ${isProductsCategoriesShown ? style.show : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <li><Link to={ROUTES.sweaters} onClick={()=>{navigationAnalyticsEvents("navigation_swetry")}} state={'481755e5-a680-4102-85f1-509a35f95404'}>Swetry</Link></li>
                            <li><Link to={ROUTES.dresses} onClick={()=>{navigationAnalyticsEvents("navigation_dresses")}} state={'bb01368e-36cc-4b11-81b7-721b48ec8e4d'}>Sukienki</Link></li>
                            <li><Link to={ROUTES.cardigans} onClick={()=>{navigationAnalyticsEvents("navigation_cardigans")}} state={'1d35804e-5080-45a0-a91f-95bc6dfca62e'}>Kardigany</Link></li>
                            <li><Link to={ROUTES.trousers} onClick={()=>{navigationAnalyticsEvents("navigation_trousers")}} state={'f95a2603-5a49-4ecf-a279-2a5bc2d242cd'}>Spodnie</Link></li>
                            <li><Link to={ROUTES.hats} onClick={()=>{navigationAnalyticsEvents("navigation_hats")}} state={'edba5da0-90c6-4e76-82de-73fe9c2f5058'}>Czapki</Link></li>
                            <li><Link to={ROUTES.scarfs} onClick={()=>{navigationAnalyticsEvents("navigation_scarfs")}} state={'f6d8a314-868c-4584-adb2-82b27f59f62d'}>Szaliki</Link></li>
                        </ul>
                    </li>
                    <li> <Link className={style.navigationItem} to="/o-nas" onClick={()=>{navigationAnalyticsEvents("navigation_about_us")}}>o nas</Link>
                    </li>
                    <li> <Link className={style.navigationItem} to="/kontakt" onClick={()=>{navigationAnalyticsEvents("navigation_contact")}}>kontakt</Link>
                    </li>
                    <li><Link className={style.navigationItem} to={ROUTES.jakZamowic} onClick={()=>{navigationAnalyticsEvents("navigation_order")}}>jak zamówić</Link></li>
                </ul>
                <div className={`${style.searchWrapper} ${isSearchBarShown ? style.show : ''}`}>
                    <Search showSearch={showSearch}/>
                </div>
                <div className={style.mobileNavigationIcons}>
                    <SearchIcon className={style.mobileSearchIcon} onClick={showSearch} />
                    <MenuIcon className={style.hamburger} onClick={showHamburger} />
                </div>

            </div>
        </nav>
    )
}