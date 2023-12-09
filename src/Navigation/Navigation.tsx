import { useState } from "react";
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import style from './Navigation.module.css';


export const Navigation = () => {
    const [isHamburgerShown, setIsHamburgerShown] = useState(false);
    const [isSearchBarShown, setIsSearchBarShown] = useState(false);
    const [isProductsCategoriesShown, setIsProductsCategoriesShown] = useState(false);

    const showHamburger = () => {
        setIsHamburgerShown(!isHamburgerShown);
        setIsSearchBarShown(false);
        console.log(isHamburgerShown)
    }

    const showSearch = () => {
        setIsHamburgerShown(false);
        setIsSearchBarShown(!isSearchBarShown);

        console.log(isHamburgerShown)
    }

    const handleMouseEnter = () => {
        setIsProductsCategoriesShown(true);
    };

    const handleMouseLeave = () => {
        setIsProductsCategoriesShown(false);
    };

    console.log(isHamburgerShown)

    return (
        <nav className={style.navigation}>
            <div className={`mainWrapper ${style.navigationWrapper}`}>
                <a href="/" className={style.logoLink}><img src="/logo.svg" alt="logo" className={style.logo} /></a>

                <ul className={`${style.navigationItemsWrapper} ${isHamburgerShown ? style.show : ''}`}>
                    <li>
                        <Link className={style.navigationItem} to="">swetry</Link>

                    </li>
                    <li className={`${style.productsItem} ${style.productsItemPraducts}`}>
                        <div className={style.productsWrapper} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <Link className={style.navigationItem} to="">produkty</Link>
                            <KeyboardArrowDownIcon />
                        </div>
                        <ul className={`${style.productsCategory} ${isProductsCategoriesShown ? style.show : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <li><Link to="">Swetry</Link></li>
                            <li><Link to="">Sukienki</Link></li>
                            <li><Link to="">Kardigany</Link></li>
                            <li><Link to="">Spodnie</Link></li>
                            <li><Link to="">Czapki</Link></li>
                            <li><Link to="">Szaliki</Link></li>
                        </ul>
                    </li>
                    <li> <Link className={style.navigationItem} to="">o nas</Link>
                    </li>
                    <li> <Link className={style.navigationItem} to="">kontakt</Link>
                    </li>
                    <li><Link className={style.navigationItem} to="">jak zamówić</Link></li>
                </ul>
                <div className={`${style.searchWrapper} ${isSearchBarShown ? style.show : ''}`}>
                    <input type="text" placeholder="Wyszukaj produkt" className={style.serachInput} />
                    <SearchIcon className={style.searchIcon} />
                    <CloseIcon className={style.closeSearchMobile} onClick={showSearch} />
                    <div className={style.searchOutput}></div>
                </div>
                <div className={style.mobileNavigationIcons}>
                    <SearchIcon className={style.mobileSearchIcon} onClick={showSearch} />
                    <MenuIcon className={style.hamburger} onClick={showHamburger} />
                </div>

            </div>
        </nav>
    )
}