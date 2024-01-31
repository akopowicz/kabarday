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
                                    <li className={style.orderedList}>Napisać wiadomość mailową na podany w nimniejszym regulaminie mail kontaktowych. Mail powinien zawierać następujące informacje;
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
                            <li className={style.orderedList}>Dostawa Produktu odbywa się na terenie Polski</li>
                            <li className={style.orderedList}>Dostawa Produktu do Klienta jest odpłatna, chyba że Umowa Sprzedaży stanowi
                                inaczej. Koszty dostawy Produktu (w tym opłaty za transport, dostarczenie i usługi
                                pocztowe) są wskazywane Klientowi na stronach Sklepu internetowego w zakładce „Koszty
                                dostawy” oraz w trakcie składania Zamówienia, w tym także w chwili wyrażenia przez Klienta
                                woli związania się Umową Sprzedaży.
                            </li>
                        </ol>
                    </li>
                    <li><b>§9 Prawo odstąpienia od umowy</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Konsument może w terminie 14 dni odstąpić od Umowy Sprzedaży bez podania
                                jakiejkolwiek przyczyny.</li>
                            <li className={style.orderedList}>W przypadku Umowy, która obejmuje wiele Produktów, które są dostarczane
                                osobno, partiami lub w częściach, termin wskazany w ust. 1 biegnie od dostawy
                                ostatniej rzeczy, partii lub części.</li>
                            <li className={style.orderedList}>Konsument może odstąpić od Umowy, składając Sprzedawcy oświadczenie o
                                odstąpieniu od Umowy. Do zachowania terminu odstąpienia od Umowy wystarczy
                                wysłanie przez Konsumenta oświadczenia przed upływem tego terminu.</li>
                            <li className={style.orderedList}>Oświadczenie może być wysłane  drogą elektroniczną poprzez przesłanie oświadczenia na adres e-mail Sprzedawcy - dane kontaktowe
                                Sprzedawcy zostały określone w §3.</li>
                            <li className={style.orderedList}>W przypadku przesłania oświadczenia przez Konsumenta drogą elektroniczną,
                                Sprzedawca niezwłocznie prześle Konsumentowi na podany przez Konsumenta
                                adres e-mail potwierdzenie otrzymania oświadczenia o odstąpieniu od Umowy.</li>
                            <li className={style.orderedList}>
                                Skutki odstąpienia od Umowy:
                                <ul>
                                    <li className={style.unordered}>
                                        W przypadku odstąpienia od Umowy zawartej na odległość Umowę uważa się za
                                        niezawartą.
                                    </li>
                                    <li className={style.unordered}>
                                        W przypadku odstąpienia od Umowy Sprzedawca zwraca Konsumentowi
                                        niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania oświadczenia
                                        Konsumenta o odstąpieniu od Umowy, wszystkie dokonane przez niego płatności, w
                                        tym koszty dostarczenia rzeczy, z wyjątkiem dodatkowych kosztów wynikających z
                                        wybranego przez Konsumenta sposobu dostarczenia innego niż najtańszy zwykły
                                        sposób dostarczenia oferowany przez Sprzedawcę.
                                    </li>
                                    <li className={style.unordered}>

                                        Zwrotu płatności Sprzedawca dokona na numer konta bankowego z którego Konsument dokonał płatności. Chyba że Konsument wskaże inny numer konta.
                                    </li>
                                    <li className={style.unordered}>Sprzedawca może wstrzymać się ze zwrotem płatności do czasu otrzymania
                                        Produktu z powrotem lub do czasu dostarczenia mu dowodu jego odesłania, w
                                        zależności od tego, które zdarzenie nastąpi wcześniej.</li>
                                    <li className={style.unordered}>Konsument powinien odesłać Produkt na adres Sprzedawcy podany w niniejszym
                                        Regulaminie niezwłocznie, nie później niż 14 dni od dnia, w którym poinformował
                                        Sprzedawcę o odstąpieniu od Umowy. Termin zostanie zachowany, jeśli Konsument
                                        odeśle Produkt przed upływem terminu 14 dni.</li>
                                    <li className={style.unordered}>Konsument odpowiada tylko za zmniejszenie wartości Produktu wynikające z
                                        korzystania z niego w sposób inny niż było to konieczne do stwierdzenia charakteru,
                                        cech i funkcjonowania Produktu.</li>

                                </ul>
                            </li>
                            <li className={style.orderedList}>Prawo do odstąpienia od umowy zawartej na odległość nie przysługuje Konsumentowi w
                                odniesieniu do Umowy
                                <ul>
                                    <li className={style.unordered}>w której przedmiotem świadczenia jest rzecz nieprefabrykowana, wyprodukowana
                                        według specyfikacji Konsumenta lub służąca zaspokojeniu jego
                                        zindywidualizowanych potrzeb,</li>
                                    <li className={style.unordered}>w której przedmiotem świadczenia jest rzecz dostarczana w zapieczętowanym
                                        opakowaniu, której po otwarciu opakowania nie można zwrócić ze względu na
                                        ochronę zdrowia lub ze względów higienicznych, jeżeli opakowanie zostało otwarte
                                        po dostarczeniu,</li>
                                    <li className={style.unordered}>o świadczenie usług, jeżeli Sprzedawca wykonał w pełni usługę za wyraźną zgodą
                                        Konsumenta, który został poinformowany przez rozpoczęciem świadczenia, że po
                                        spełnieniu świadczenia przez Sprzedawcę utraci prawo odstąpienia od Umowy,</li>
                                    <li className={style.unordered}>w której przedmiotem świadczenia są rzeczy, które po dostarczeniu, ze względu na
                                        swój charakter, zostają nierozłącznie połączone z innymi rzeczami,</li>
                                </ul>
                            </li>
                        </ol>
                    </li>

                    <li><b>§10 Reklamacja i gwarancja</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Umową Sprzedaży objęte są nowe Produkty.</li>
                            <li className={style.orderedList}>W przypadku wystąpienia wady zakupionego u Sprzedawcy towaru Klient ma prawo
                                do reklamacji w oparciu o przepisy dotyczące rękojmi w kodeksie cywilnym.</li>
                            <li className={style.orderedList}>Reklamację należy zgłosić drogą elektroniczną na podane w niniejszym
                                Regulaminie adres Sprzedawcy.</li>
                            <li className={style.orderedList}>Zaleca się, aby w reklamacji zawrzeć m.in. zwięzły opis wady, okoliczności (w tym
                                datę) jej wystąpienia, dane Klienta składającego reklamację, oraz żądanie Klienta w
                                związku z wadą towaru.
                            </li>
                            <li className={style.orderedList}>Towary odsyłane w ramach procedury reklamacyjnej należy wysyłać na adres
                                podany w § 3 niniejszego Regulaminu.</li>
                        </ol>
                    </li>
                    <li><b>§11 Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń</b>
                        <ol className={style.first_list}>
                            <li className={style.orderedList}>Szczegółowe informacje dotyczące możliwości skorzystania przez Konsumenta z
                                pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń oraz
                                zasady dostępu do tych procedur dostępne są w siedzibach oraz na stronach
                                internetowych powiatowych (miejskich) rzeczników konsumentów, organizacji
                                społecznych, do których zadań statutowych należy ochrona konsumentów,
                                Wojewódzkich Inspektoratów Inspekcji Handlowej oraz pod następującymi adresami
                                internetowymi Urzędu Ochrony Konkurencji i Konsumentów:
                                http://www.uokik.gov.pl/spory_konsumenckie.php;
                                http://www.uokik.gov.pl/sprawy_indywidualne.php oraz
                                http://www.uokik.gov.pl/wazne_adresy.php.</li>

                           

                        </ol>
                    </li>
                    <li><b>§12 Dane osobowe w Sklepie internetowym</b>
                                <ol className={style.first_list}>
                                    <li className={style.orderedList}>Administratorem danych osobowych Klientów zbieranych za pośrednictwem Sklepu
                                        internetowego jest Sprzedawca.</li>
                                    <li className={style.orderedList}>Dane osobowe Klientów zbierane przez administratora za pośrednictwem Sklepu
                                        internetowego zbierane są w celu realizacji Umowy Sprzedaży, a jeżeli Klient wyrazi na to
                                        zgodę - także w celu marketingowym.</li>
                                    <li className={style.orderedList}>Odbiorcami danych osobowych Klientów Sklepu internetowego mogą być:
                                        <ul>
                                            <li className={style.unordered}>W przypadku Klienta, który korzysta w Sklepie internetowym ze sposobu dostawy
                                                przesyłką kurierską, Administrator udostępnia zebrane dane
                                                osobowe Klienta wybranemu przewoźnikowi lub pośrednikowi realizującemu
                                                przesyłki na zlecenie Administratora.</li>
                                        </ul></li>
                                    <li className={style.orderedList}>Klient ma prawo dostępu do treści swoich danych oraz ich poprawiania.
                                    </li>
                                    <li className={style.orderedList}>Podanie danych osobowych jest dobrowolne, aczkolwiek niepodanie wskazanych w
                                        Regulaminie danych osobowych niezbędnych do zawarcia Umowy Sprzedaży skutkuje
                                        brakiem możliwości zawarcia tejże umowy.</li>
                                </ol>
                            </li>

                            <li><b>§13 Postanowienia końcowe</b>
                                <ol className={style.first_list}>
                                    <li className={style.orderedList}>Umowy zawierane poprzez Sklep internetowy zawierane są w języku polskim.</li>
                                    <li className={style.orderedList}>Sprzedawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych
przyczyn to jest: zmiany przepisów prawa, zmiany sposobów płatności i dostaw - w zakresie,
w jakim te zmiany wpływają na realizację postanowień niniejszego Regulaminu. O każdej
zmianie Sprzedawca poinformuje Klienta z co najmniej 7 dniowym wyprzedzeniem.</li>
                                    <li className={style.orderedList}>W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie
powszechnie obowiązujące przepisy prawa polskiego, w szczególności: Kodeksu cywilnego;
ustawy o świadczeniu usług drogą elektroniczną; ustawy o prawach konsumenta, ustawy o
ochronie danych osobowych.</li>
<li className={style.orderedList}>Klient ma prawo skorzystać z pozasądowych sposobów rozpatrywania reklamacji i
dochodzenia roszczeń. W tym celu może złożyć skargę za pośrednictwem unijnej platformy
internetowej ODR.</li>
                                </ol>
                            </li>
                </ol>
            </div>
        </div>
    )
}