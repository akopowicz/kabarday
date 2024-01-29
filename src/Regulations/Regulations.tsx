import style from './Regulations.module.css';
import { ROUTES } from '../constants';

export const Regulations = () => {
    return (
        <div className={`mainWrapper ${style.mainWrapper}`}>
            <div className={style.content_wrapper}>
                <h3 className={style.title}>REGULAMIN</h3>
            </div>
            <div className={style.content}>
                <ol>
                    <li><b>§1 Postanowienia wstępne</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Sklep internetowy Kabarday, dostępny pod adresem
                                internetowym <a href={ROUTES.website} className={style.link}>{ROUTES.website}</a>  prowadzony jest przez Anna Kopowicz prowadzącego działalność gospodarczą pod firmą Anna Kopowicz wpisaną do
                                Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG) prowadzonej przez
                                ministra właściwego ds. gospodarki, NIP 5711722836, REGON 389814267</li>
                            <li className={style.orderedList}>
                                Niniejszy regulamin skierowany jest do Konsumentów i określa zasady i tryb
                                zawierania z Konsumentem Umowy Sprzedaży na odległość za pośrednictwem Sklepu.
                            </li>
                        </ol>
                    </li>

                    <li><b>§2 Definicje</b>
                        <ol>
                            <li className={style.orderedList}>
                                <span className={style.bold}>Konsument</span> - osoba fizyczna zawierająca ze Sprzedawcą umowę w ramach Sklepu,
                                której przedmiot nie jest związany bezpośrednio z jej działalnością gospodarczą lub
                                zawodową.
                            </li>
                            <li className={style.orderedList}><span className={style.bold}>Sprzedawca</span> - osoba fizyczna prowadząca działalność gospodarczą pod firmą
                                Anna Kopowicz, wpisaną do Centralnej Ewidencji i Informacji o Działalności
                                Gospodarczej (CEIDG) prowadzonej przez ministra właściwego ds. gospodarki, NIP 5711722836, REGON 389814267
                            </li>
                            <li className={style.orderedList}><span className={style.bold}>Klient</span> - każdy podmiot dokonujący zakupów za pośrednictwem Sklepu.
                            </li>
                            <li className={style.orderedList}><span className={style.bold}>Przedsiębiorca</span> - osoba fizyczna, osoba prawna i jednostka organizacyjna
                                niebędąca osobą prawną, której odrębna ustawa przyznaje zdolność prawną,
                                wykonująca we własnym imieniu działalność gospodarczą, która korzysta ze Sklepu.
                            </li>
                            <li className={style.orderedList}><span className={style.bold}>Sklep</span> - sklep internetowy prowadzony przez Sprzedawcę pod adresem
                                internetowym <a href={ROUTES.website} className={style.link}>{ROUTES.website}</a>
                            </li>
                            <li className={style.orderedList}><span className={style.bold}>Umowa zawarta na odległość</span>- umowa zawarta z Klientem w ramach
                                zorganizowanego systemu zawierania umów na odległość (w ramach Sklepu), bez
                                jednoczesnej fizycznej obecności stron, z wyłącznym wykorzystaniem jednego lub
                                większej liczby środków porozumiewania się na odległość do chwili zawarcia umowy
                                włącznie</li>
                            <li className={style.orderedList}><span className={style.bold}>Regulamin</span> - niniejszy regulamin Sklepu.</li>
                            <li className={style.orderedList}><span className={style.bold}>Zamówienie</span>- oświadczenie woli Klienta składane za pomocą wiadomości mailowej na adres <a href={`mailto:${ROUTES.email}`} className={style.link}>{ROUTES.email}</a> i zmierzające bezpośrednio do zawarcia Umowy Sprzedaży Produktu
                                lub Produktów ze Sprzedawcą.</li>
                            <li className={style.orderedList}><span className={style.bold}>Produkt</span> - dostępna w Sklepie rzecz ruchoma/usługa będąca przedmiotem Umowy
                                Sprzedaży między Klientem a Sprzedawcą.</li>
                            <li className={style.orderedList}><span className={style.bold}>Umowa Sprzedaży</span> - umowa sprzedaży Produktu zawierana albo zawarta między
                                Klientem a Sprzedawcą za pośrednictwem Sklepu internetowego. Przez Umowę
                                Sprzedaży rozumie się też - stosowanie do cech Produktu - umowę o świadczenie
                                usług i umowę o dzieło</li>
                        </ol>
                    </li>

                    <li><b>§3 Kontakt ze Sklepem</b>

                        <ul>
                            <li className={style.adresLi}>Kabarday Anna Kopowicz</li>
                            <li className={style.adresLi}>Gralewo-Stacja 4/4</li>
                            <li className={style.adresLi}>13-200 Działdowo</li>
                        </ul>
                        <ul>
                            <li>e-mail: <a href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a></li>
                        </ul>



                    </li>

                    <li><b>§4 Wymagania techniczne</b>
                        <ol className={style.first_list}>
                            <li>Do korzystania ze Sklepu, w tym przeglądania asortymentu Sklepu oraz składania
                                zamówień na Produkty, niezbędne są:

                                <ul>
                                    <li className={style.unordered}>urządzenie końcowe z dostępem do sieci Internet i przeglądarką internetową,</li>
                                    <li className={style.unordered}>aktywne konto poczty elektronicznej (e-mail),</li>
                                    <li className={style.unordered}>włączona obsługa plików cookies</li>
                                </ul>
                            </li>
                        </ol>
                    </li>

                    <li><b>§5 Informacje ogólne</b>
                        <ol>
                            <li className={style.orderedList}>
                                Sprzedawca w najszerszym dopuszczalnym przez prawo zakresie nie ponosi
                                odpowiedzialności za zakłócenia w tym przerwy w funkcjonowaniu Sklepu
                                spowodowane siłą wyższą, niedozwolonym działaniem osób trzecich lub
                                niekompatybilnością Sklepu internetowego z infrastrukturą techniczną Klienta.
                            </li>
                            <li className={style.orderedList}>
                                Przeglądanie asortymentu Sklepu nie wymaga zakładania Konta. Składanie
                                zamówień przez Klienta na Produkty znajdujące się w asortymencie Sklepu możliwe
                                jest poprzez napisania wiadomości na adres <a href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a>
                            </li>
                            <li className={style.orderedList}>
                                Ceny podane w Sklepie są podane w polskich złotych
                            </li>
                            <li className={style.orderedList}>Na końcową (ostateczną) kwotę do zapłaty przez Klienta składa się cena za Produkt
                                oraz koszt dostawy (w tym opłaty za transport, dostarczenie i usługi pocztowe), o
                                której Klient jest informowany na stronach Sklepu w trakcie składania Zamówienia, w
                                tym także w chwili wyrażenia woli związania się Umową Sprzedaży.</li>
                            <li className={style.orderedList}>W przypadku Umowy obejmującej prenumeratę lub świadczenie usług na czas
                                nieoznaczony końcową (ostateczną) ceną jest łączna cena obejmująca wszystkie
                                płatności za okres rozliczeniowy.</li>
                            <li className={style.orderedList}>Gdy charakter przedmiotu Umowy nie pozwala, rozsądnie oceniając, na
                                wcześniejsze obliczenie wysokości końcowej (ostatecznej) ceny, informacja o
                                sposobie, w jaki cena będzie obliczana, a także o opłatach za transport,
                                dostarczenie, usługi pocztowe oraz o innych kosztach, będzie podana w Sklepie w
                                opisie Produktu.</li>
                        </ol>
                    </li>

                    <li><b>§6 Zasady składania Zamówienia</b>
                        <ol className={style.first_list}>
                            <li>W celu złożenia Zamówienia należy:
                                <ul>
                                    <li className={style.orderedList}>Napisać wiadomość mailową na podany w nimniejszym regulaminie mail kontaktowych. Mail powinien zawierać następujące informacje1;
                                        <ul>
                                            <li className={style.unordered}>Nazwa zamiawianego produktu,</li>
                                            <li className={style.unordered}>Kolor</li>
                                            <li className={style.unordered}>Wymiary</li>
                                            <li className={style.unordered}>Ilość</li>
                                        </ul>
                                    </li>
                                    <li className={style.orderedList}>Opłacić zmaówienie przelewem na konto bankowe które zostanie przesłane na maila po potwierdzeniu przyjęcia zamówienia</li>


                                </ul>
                            </li>


                        </ol>
                    </li>

                    <li><b>§7 Oferowane metody dostawy oraz płatności</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Klient może skorzystać z następujących metod dostawy  zamówionego Produktu:
                                <ul>
                                    <li className={style.unordered}>
                                        Przesyłka kurierska
                                    </li>
                                </ul></li>
                            <li className={style.orderedList}>Klient może skorzystać z następujących metod płatności:
                                <ul>
                                    <li className={style.unordered}>
                                        Płatność przelewem na konto Sprzedawcy
                                    </li>
                                </ul>
                            </li>
                            <li className={style.orderedList}>Szczegółowe informacje na temat metod dostawy oraz akceptowalnych metod płatności
                                znajdują się na stronach Sklepu.
                            </li>
                        </ol>
                    </li>

                    <li><b>§8 Wykonanie umowy sprzedaży
</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Zawarcie Umowy Sprzedaży między Klientem a Sprzedawcą następuje po
uprzednim złożeniu przez Klienta Zamówienia za pomocą wiadomości mailowej zgodnie z § 6 Regulaminu.
</li>
                            <li className={style.orderedList}>Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego otrzymanie oraz
jednocześnie przyjmuje Zamówienie do realizacji. Potwierdzenie otrzymania
Zamówienia i jego przyjęcie do realizacji następuje poprzez przesłanie przez
Sprzedawcę Klientowi stosownej wiadomości e-mail na podany w trakcie składania
Zamówienia adres poczty elektronicznej Klienta, która zawiera co najmniej
oświadczenia Sprzedawcy o otrzymaniu Zamówienia i o jego przyjęciu do realizacji
oraz potwierdzenie zawarcia Umowy Sprzedaży. Z chwilą otrzymania przez Klienta
powyższej wiadomości e-mail zostaje zawarta Umowa Sprzedaży między Klientem a
Sprzedawcą.
</li>
                            <li className={style.orderedList}>Produkt zostanie
wysłany przez Sprzedawcę w terminie wskazanym w jego opisie (z zastrzeżeniem
ustępu 4 niniejszego paragrafu), w sposób wybrany przez Klienta podczas składania
Zamówienia.
</li>
<li className={style.orderedList}>
W przypadku zamówienia Produktów o różnych terminach dostawy
    <ul>
    <li className={style.unordered}>
   terminem
dostawy jest najdłuższy podany termin.
    </li>
    <li className={style.unordered}>
    Klient ma
możliwość żądania dostarczenia Produktów częściami lub też dostarczenia wszystkich
Produktów po skompletowaniu całego zamówienia  
    </li>
</ul></li>
                            <li className={style.orderedList}>Początek biegu terminu dostawy Produktu do Klienta liczy się od dnia wpłynięcia środków na rachunku bankowego Sprzedawcy</li>
                            <li className={style.orderedList}>Utrzymanie sesji: Dzięki ciasteczkom strona może śledzić aktywność użytkownika na różnych podstronach,
                                co pozwala na łatwe wracanie do ostatnio odwiedzanych sekcji lub kontynuowanie niedokończonych działań,
                                takich jak wypełnianie formularzy.</li>
                            <li className={style.orderedList}>Optymalizacja wydajności: Ciasteczka mogą być wykorzystane do analizy ruchu i zachowań użytkowników na
                                stronie, co pomaga w optymalizacji jej wydajności oraz dostarczaniu treści o wysokiej jakości.</li>

                            <li className={style.orderedList}>Integracja z mediami społecznościowymi: Ciasteczka pozwalają na integrację z serwisami
                                społecznościowymi, takimi jak Facebook, Twitter czy Instagram, co umożliwia łatwe udostępnianie treści
                                oraz korzystanie z dodatkowych funkcji, takich jak komentowanie czy polubienia.</li>
                        </ol>
                    </li>
                    <li><b>Funkcje ciasteczek technicznych</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Utrzymanie sesji użytkownika: Ciasteczka techniczne umożliwiają utrzymanie sesji użytkownika podczas
                                poruszania się po stronie, co pozwala na przechodzenie między różnymi sekcjami witryny bez konieczności
                                ponownego logowania czy wprowadzania tych samych informacji.</li>
                            <li className={style.orderedList}>Zapamiętywanie preferencji użytkownika: Dzięki ciasteczkom technicznym strona może przechowywać
                                informacje na temat preferencji użytkowników, takie jak wybrany język, wielkość czcionki, ustawienia
                                kolorystyczne czy inne elementy personalizacji.</li>
                            <li className={style.orderedList}>Obsługa formularzy: Ciasteczka techniczne wspomagają funkcjonowanie formularzy na stronie, takich jak
                                formularze logowania, rejestracji czy kontaktowe, zapewniając prawidłowe przetwarzanie danych
                                wprowadzanych przez użytkowników.</li>
                            <li className={style.orderedList}>Optymalizacja wydajności strony: Użycie ciasteczek technicznych umożliwia monitorowanie wydajności
                                strony oraz szybkość ładowania poszczególnych elementów, co pozwala na optymalizację i poprawę jakości
                                świadczonych usług.</li>
                            <li className={style.orderedList}>Bezpieczeństwo: Ciasteczka techniczne pomagają w zapewnieniu bezpieczeństwa witryny i jej użytkowników,
                                na przykład poprzez weryfikację tożsamości użytkowników, wykrywanie prób włamań czy ochronę przed atakami
                                typu CSRF (Cross-Site Request Forgery).</li>
                        </ol>
                    </li>

                    <li><b>Funkcje ciasteczek analitycznych</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Pomiar ruchu na stronie: Ciasteczka analityczne pozwalają na monitorowanie liczby odwiedzin, unikalnych
                                użytkowników i wyświetleń stron, co daje ogólny obraz popularności i wydajności witryny.</li>
                            <li className={style.orderedList}>Analiza zachowań użytkowników: Dzięki ciasteczkom analitycznym można zbierać informacje o sposobie, w
                                jaki użytkownicy poruszają się po stronie, na przykład czas spędzony na poszczególnych podstronach,
                                ścieżki nawigacji oraz miejsca, w których opuszczają witrynę.</li>
                            <li className={style.orderedList}>Optymalizacja konwersji: Ciasteczka analityczne pomagają w identyfikowaniu elementów strony, które
                                wpływają na skuteczność osiągania celów biznesowych, takich jak rejestracja, złożenie zamówienia czy
                                wypełnienie formularza kontaktowego.</li>
                            <li className={style.orderedList}>Segmentacja użytkowników: Użycie ciasteczek analitycznych umożliwia grupowanie użytkowników według
                                różnych kryteriów co pozwala na lepsze dostosowanie treści i oferty do potrzeb poszczególnych segmentów.
                            </li>
                            <li className={style.orderedList}>Testowanie A/B: Ciasteczka analityczne są wykorzystywane do przeprowadzania testów A/B, które polegają
                                na porównaniu dwóch wersji strony internetowej, aby sprawdzić, która z nich lepiej spełnia założone cele.
                                Testy te pomagają w optymalizacji wyglądu, funkcjonalności i treści witryny.</li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    )
}