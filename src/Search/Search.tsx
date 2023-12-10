import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import style from './Search.module.css';

export const Search = ({showSearch}) => {
    return (
        <div>
            <input type="text" placeholder="Wyszukaj produkt" className={style.serachInput} />
            <SearchIcon className={style.searchIcon} />
            <CloseIcon className={style.closeSearchMobile} onClick={showSearch} />
            <div className={style.searchOutput}></div>
        </div>
    )
}