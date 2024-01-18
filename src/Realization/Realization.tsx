import style from './Realization.module.css';
export default function Realization() {
    return (
        <div className={`mainWrapper ${style.pathWrapper}`}>
            <h1 className={style.title}>Realizacja zamówienia</h1>
            <div className={style.content}>
                <p>Czas realizacji zamówinia wynosi od <span className={style.bold}> 5 do 21 dni roboczych</span>. Przystąpienie do realizacji zamówienia następuje po zaksięgowaniu opłaty za zamówienia na naszym koncie bankowym.</p>
            </div>
        </div>
    )
}