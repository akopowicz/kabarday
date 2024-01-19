import style from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { ROUTES } from "../constants";

const FooterNavigaton = [
    {
        title: 'ZAKUPY',
        links: [
            {
                title: 'Jak złożyć zamówienie?',
                link: ROUTES.jakZamowic
            },
            {
                title: 'Metody płatności',
                link: ROUTES.payment
            }, 
            {
                title: 'Realizacja zamówienia',
                link: ROUTES.realization
            },
            {
                title: 'Koszt dostawy',
                link: ROUTES.delivery
            }
        ]
    },
    {
        title: 'POMOC',
        links: [
            {
                title: 'Zwroty i reklamacje',
                link: ""
            },
            {
                title: 'Instrukcja prania',
                link: ""
            }
        ]
    },
    {
        title: 'INFORMACJE',
        links: [
            {
                title: 'O nas',
                link: ROUTES.about
            },
            {
                title: 'Regulamin',
                link: ROUTES.policy
            }, 
            {
                title: 'Polityka prywatności',
                link: ROUTES.privacyPolicy
            },
        ]
    },
]

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footerWrapper} mainWrapper`}>
                {FooterNavigaton.map(footerelement=>{
                    return (
                        <div className={style.navigationGroup} key={footerelement.title}>
                            <h4 className={style.navigationHeading}>{footerelement.title}</h4>
                            <div className={style.line}></div>
                            <ul>
                                {footerelement.links.map(footerlink=>{
                                    return (
                                        <li className={style.footerNavigationItem} key={footerlink.title}><Link className={style.footerLink} to={footerlink.link} onClick={()=>{scrollTo(0,0)}}>{footerlink.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
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
                        <a target="_blank" className={style.socialMediaIconLink} href={ROUTES.instagram}><InstagramIcon className={style.socialMediaIcon} /></a>
                        <a target="_blank" className={style.socialMediaIconLink} href={ROUTES.facebook}><FacebookIcon className={style.socialMediaIcon} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
} 