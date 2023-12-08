import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import style from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <div className={`mainWrapper ${style.navigationWrapper}`}>
                <img src="/logo.svg" alt="logo" className={style.logo} />
                
                <ul>
                    <li>
                        <Link to="">swetry</Link>
                        <Link to="">produkty</Link>
                        <Link to="">o nas</Link>
                        <Link to="">kontakt</Link>
                        <Link to="">jak zmaówić</Link>
                    </li>
                </ul>
                <div className="search_wrapper">
                    <input type="text" placeholder="" />
                    <SearchIcon />
                </div>

                <MenuIcon className={style.hamburger} />
            </div>
        </nav>
    )
}