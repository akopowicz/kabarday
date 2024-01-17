import style from './Contact.module.css';
import {ROUTES} from '../constants';

export default function Contact() {
    return (
        <div className={`mainWrapper ${style.contactWrapper}`}>
            <h2>Kontakt</h2>
            <div className={style.contact}>
                <h3>Napisz do nas:</h3>
                <a href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a>

                <h3>Znajdziesz nas na:</h3>
                    <a target="_blank" href="https://www.facebook.com/kabarday.fashion/">Facebook: <span>kabarday.fashion</span></a>
                    <a target="_blank" href="https://www.instagram.com/kabarday.fashion/">Instagram: <span>kabarday.fashion</span></a>
            </div>
        </div>
    )
}
