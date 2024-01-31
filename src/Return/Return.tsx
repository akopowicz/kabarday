import style from './Return.module.css'
import { ROUTES } from '../constants';

export const Return = () => {
    return (
        <div className={`mainWrapper ${style.mainWrapper}`}>
            <div className={style.content_wrapper}>
                <h3 className={style.title}>ZWROTY I REKLAMACJE</h3>
            </div>
            <div className={style.content}>
                <ol>
                    <li>
                        <ol className={style.first_list}>
                            <li>Produkty zamówione online możesz zawsze zwrócić w ciągu 14 dni. Pamiętaj jednak, że produkty personalizowanie nie podlegają zwrotowi. W naszym sklepie produkty presonalizowane to takie gdzie kolor został wybrany z palety kolorów umieszonej wraz ze zdjęciami produktu. O tym, że produkt jest personalizowany poinformujemy Cię w mailu, potwierdzającym przyjęcie zmaównienia.</li>
                           
                        </ol>
                    </li>
                    <li>
                                <b>W celu zwrócenia produktu:</b>
                                <ul>
                                    <li className={style.unordered}>Napisz maila na adres <a className={style.link} href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a>. W wiadomości powinny znaleźć się następujące informacje: dowód zakupu a także informacja na jaki numer konta mają zostać zwrócone pieniądze. Odstąpnienie od umowy powinno się również znaleźć w formie pisemnej/wydruk w paczce zwrotnej</li>
                                    <li className={style.unordered}>Przesyłkę odeślin na adres:
                                        <ul>
                                            <li>Kabarday Anna Kopowicz</li>
                                            <li>Gralewo Stacja 4/4</li>
                                            <li>13-200 Działdowo</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                    <li><b>Wymogi odnośnie zwracanej rzeczy:</b>
                        <ol>
                            <li className={style.unordered}>
                                Odsyłany produkt nie może nosić żadnych śladów użytkowania. M.in. nie może być zabrudzony, przesiąknęty zapechem, prany, prasowany
                            </li>
                            <li className={style.unordered}>
                                Odsyłany produkt musi posiadać oryginalne metki.
                            </li>
                        </ol>
                    </li>

                    <li><b>Zwrot pieniędzy</b>

                        <ul>
                            <li className={style.unordered}>
                                Po sprawdzeniu odesłanego produktu, jeżeli nie będzie żadnych przeciwskazań wyślemy maila z informacją o zwrocie pieniędzy na konto bankowe podane w zwrocie.
                            </li>
                            <li className={style.unordered}>Zwrot środków zostaniedokonany w ciągu 14 dni od daty otrzymania paczki</li>
                        </ul>

                    </li>

                    <li><b>Reklamacje</b>
                        <ol className={style.first_list}>
                        <li className={style.unordered}>Napisz maila na adres <a className={style.link} href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a>. W wiadomości opisz problem jaki wystąpił z produktem i dlaczego jest składana reklamacja. W wiadomości załącz również dowód zakupu. Informacja o reklamacji powinna znaleźć się również w paczce zwrotnej w formie pisemnej.</li>
                                    <li className={style.unordered}>Przesyłkę odeślij na adres:
                                        <ul>
                                            <li>Kabarday Anna Kopowicz</li>
                                            <li>Gralewo Stacja 4/4</li>
                                            <li>13-200 Działdowo</li>
                                        </ul>
                                    </li>

                                    <li className={style.unordered}>Na rozpatrzenie reklamacji mamy 14 dni od momentu otrzymania przesyłki                                       
                                    </li>
                                    <li className={style.unordered}>Wszystkie szczegóły związane z reklamacją znajdują się w <a className={style.link} href={ROUTES.regulation}>regulaminie</a>                                      
                                    </li>
                        </ol>
                    </li>

                   
                    

                   

                   
                    
                          

                    
                   
                    

                   
                </ol>
            </div>
        </div>
    )
}