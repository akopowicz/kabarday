import style from './Payment.module.css';
export default function Payment() {
    return (
        <div className={`mainWrapper ${style.paymentWrapper}`}>
            <h1 className={style.title}>Metody płatności</h1>
            <div className={style.content}>
                <p>Zamówienie należy opłacić <span className={style.bankAccount}>przelewem na numer konta</span>, który zostanie przesłany na adres mailowy po ustaleniu wszytskich szczegułów zamówienia.</p>
                
            </div>
           
            
        </div>
    )
}