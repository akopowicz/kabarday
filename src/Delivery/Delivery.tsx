import style from './Delivery.module.css';
export default function Delivery() {
    return (
        <div className={`mainWrapper ${style.orderWrapper}`}>
            <h1 className={style.title}>Koszt dostawy</h1>
            <h3 className={style.promotion}>Przy zamównieniach powyżej 1000zł dostawa gratis</h3>
            <div className={style.content}>
                <table className={style.table}>
                <thead className={style.tableHead}>
                <tr>
                    <td className={style.td}>Sposób dostawy</td>
                    <td className={style.td}>Koszt</td>
                  <td className={style.td}>Czas dostarczenia</td>  
                    </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td className={style.btd}>DPD</td>
                        <td className={style.btd}>26zł</td>
                        <td className={style.btd}>1-3 dni</td>
                    </tr>
                    <tr>
                        <td className={style.btd}>Paczkomat Inpost</td>
                        <td className={style.btd}>21 zł</td>
                        <td className={style.btd}>1-3 dni</td>
                    </tr>
                    </tbody>
                    
                </table>
                
            </div>
            <div className={style.additionalInformation}>
            <p>Podane ceny dotyczą wyłącznie przesyłek na terenie Polski.</p>
            <p>W celu złożenia zamówienia z przesyłką za granicę proszę o poinformowaniu o tym podczas składania zamówienia.</p>
            </div>
            
        </div>
    )
}