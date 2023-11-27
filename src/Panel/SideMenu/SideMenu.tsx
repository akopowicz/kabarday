import style from './SideMenu.module.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const SideMenu = () => {
    return (
        <div className={style.side_menu}>
            <div className={style.logo_bg}>
                <img src="/logo.svg" className={style.logo} alt="" />
            </div>

            <div className={style.categories}>
                <p><LocalMallIcon className={style.icon}/>Produkty</p>
            </div>

        </div>
    )
}