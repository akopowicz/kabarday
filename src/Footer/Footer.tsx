import style from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { ROUTES } from "../constants";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footerWrapper} mainWrapper`}>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>ZAKUPY </h4>
                    <div className={style.line}></div>
                    <ul>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to={ROUTES.jakZamowic} onClick={()=>{scrollTo(0,0)}}>Jak złożyć zamówienie?</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to={ROUTES.payment} onClick={()=>{scrollTo(0,0)}}>Metody płatności</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to={ROUTES.realization} onClick={()=>{scrollTo(0,0)}}>Realizacja zamówienia</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to={ROUTES.delivery} onClick={()=>{scrollTo(0,0)}}>Koszt dostawy</Link></li>
                    </ul>
                </div>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>POMOC</h4>
                    <div className={style.line}></div>
                    <ul>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to='' onClick={()=>{scrollTo(0,0)}}>Zwroty i reklamacje</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to='' onClick={()=>{scrollTo(0,0)}}>Instrukcja prania</Link></li>
                    </ul>
                </div>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>INFORMACJE</h4>
                    <div className={style.line}></div>
                    <ul>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to='/o-nas' onClick={()=>{scrollTo(0,0)}}>O nas</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to='' onClick={()=>{scrollTo(0,0)}}>Regulamin</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to='/polityka-prywatnosci' onClick={()=>{scrollTo(0,0)}}>Polityka prywatności</Link></li>

                    </ul>
                </div>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>Kontakt</h4>
                    <div className={style.line}></div>
                    <ul>
                        <a className={`${style.footerNavigationItem} ${style.footerLink}`} href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a>
                    </ul>
                </div>
                <div className={style.socialMediaWrapper}>
                    <h4 className={style.socialMediaHeading}>Dołącz do nas</h4>
                    <div className={style.iconsWrapper}>
                        <a target="_blank" className={style.socialMediaIconLink} href="https://www.instagram.com/kabarday.fashion/"><InstagramIcon className={style.socialMediaIcon} /></a>
                        <a target="_blank" className={style.socialMediaIconLink} href="https://www.facebook.com/kabarday.fashion/"><FacebookIcon className={style.socialMediaIcon} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
} 