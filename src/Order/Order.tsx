import style from './Order.module.css';

export default function Order() {
    return (
        <div className={`mainWrapper ${style.orderWrapper}`}>
            <h1 className={style.title}>Jak zamówić?</h1>
            <div className={style.content}>
                <p>Nasze produkty tworzymy na wasze specjalne zamówienie.</p>
                <p>Daje to wyjątkową możliwość zamówienia ubrania dokładnie dopasowanego do waszych potrzeb i preferencji. Krótka rozmowa i poznanie Was, umożliwi nam stworzenie idealnego produktu.</p>
                <p className={style.instruction}>W celu złożenia zamówienia napisz do nas wiadomość na adres mailowy:</p>
                <a className={style.link} href="mailto:info.kabarday@gmail.com">info.kabarday@gmail.com</a>
            </div>
        </div>
    )
}