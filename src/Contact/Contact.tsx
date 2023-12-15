import style from './Contact.module.css';

export default function Contact() {
    return (
        <div className={`mainWrapper ${style.contactWrapper}`}>
            <h2>Kontakt</h2>
            <div className={style.contact}>
                <h3>Napisz do nas:</h3>
                <a href="mailto:info.kabarday@gmail.com">info.kabarday@gmail.com</a>

                <h3>Znajdziesz nas na:</h3>
                    <a href="https://www.facebook.com/kabarday.fashion/">Facebook: <span>kabarday.fashion</span></a>
                    <a href="https://www.instagram.com/kabarday.fashion/">Instagram: <span>kabarday.fashion</span></a>
            </div>
        </div>
    )
}
