import style from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footerWrapper} mainWrapper`}>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>ZAKUPY </h4>
                    <div className={style.line}></div>
                    <ul>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Jak złożyć zamówienie?</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Forma płatności</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Realizacja zmaówienia</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Koszt dostawy</Link></li>
                    </ul>
                </div>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>POMOC</h4>
                    <div className={style.line}></div>
                    <ul>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Zwroty i reklamacje</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Instrukcja prania</Link></li>
                    </ul>
                </div>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>INFORMACJE</h4>
                    <div className={style.line}></div>
                    <ul>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>O nas</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Regulamin</Link></li>
                        <li className={style.footerNavigationItem}><Link className={style.footerLink} to=''>Polityka prywatności</Link></li>

                    </ul>
                </div>
                <div className={style.navigationGroup}>
                    <h4 className={style.navigationHeading}>Kontakt</h4>
                    <div className={style.line}></div>
                    <ul>
                        <a className={`${style.footerNavigationItem} ${style.footerLink}`} href="mailto:kabarday.info@gmail.com">kabarday.info@gmail.com</a>
                    </ul>
                </div>
                <div className={style.socialMediaWrapper}>
                    <h4 className={style.socialMediaHeading}>Dołącz do nas</h4>
                    <div className={style.iconsWrapper}>
                        <a className={style.socialMediaIconLink} href=""><InstagramIcon className={style.socialMediaIcon} /></a>
                        <a className={style.socialMediaIconLink} href=""><FacebookIcon className={style.socialMediaIcon} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
} 