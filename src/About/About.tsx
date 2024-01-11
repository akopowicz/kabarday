import { Link } from 'react-router-dom';
import style from './About.module.css';

export default function About() {
    return (
        <div className={`${style.aboutWrapper} mainWrapper`}>
            <h1>O nas</h1>
            {/* <div> */}
                <img src="about.webp" alt="" className={style.aboutImage} />
            {/* </div> */}
            <div className={style.aboutTextWrapper}>
               
                <p>Marka <span className={style.brandName}>Kabarday</span> została stworzona z myślą o tych, którzy cenią sobie ubrania wykonane z najwyższej jakości materiałów, a także poszukują rzeczy indywidualnych. Wszystkie nasze produkty są ręcznie robione z najwyższej jakości włóczek z naturlnych przędz. Sprawia to, że każdy model jest jedyny i niepowtarzalny, a ubrania przy odpowiedniej pielęgnacji będę długo służyć swoim właścicielom.</p>
                <p>Gwarantujemy, że każdy model został zaprojektowany i wykonany z miłości do perfekcji</p>
                <p>Najważniejsze dla nas jesteście Wy, wasze potrzeby i preferencje. Nasze produkty w wiekszości towrzymy na Wasze specjalne zamówienie, uwzględniając wasze potrzeby. </p>

                <p>Z tego powodu składa się u nas zamówienie poprzez napisanie wiadomości.
                    Wiemy, wydłuża to proces i nie jest takie wygodne jak kliknięcie w przycisk na stronie, jednak dzięki temu możemy zapewnić, że produkt będzie jak najbardziej dostosowany do Ciebie i Twoich potrzeb.
                </p>
               
               <Link to="/jak-zamowic" className={style.link}>Zobacz więcej szczegółów odnośnie składania zamówień</Link>
            </div>
        </div>
    )
}