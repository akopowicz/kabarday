import { useState } from "react";
import style from "./Details.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { analyticsEvent } from "../../../analytics";
import { ROUTES } from "../../../constants";

type poductTypeType = {
    id: string,
    type_name: string,
}

type photoType = {
    id: string,
    photo_link: string,
    product_id: string,
}

type measurementsType = {
    product_id: string;
    length: number | null;
    width: number | null;
    sleeve_length: number | null;
}

type productType = {
    composition: string | null;
    description: string | null;
    id: string;
    name: string;
    price: number | null;
    sex: string | null;
    stock: number | null;
    time: string | null;
    type_id: string | null;
    product_type: poductTypeType | null;
    photos: photoType[];
    measurements: measurementsType[] | null;
}

export const Details = ({ product }: { product: productType }) => {
    const [avaliableColors, setAvaliableColors] = useState<boolean>(false)
    const [howToOrder, setHowToOrder] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false);

    console.log(product.measurements)
    return (
        <div className={style.detailsWrapper}>
            <div className={style.nameAndPrice}>
                <h2 className={style.productName}>{product.name}</h2>
                <p className={style.productPrice}>{product.price} zł</p>
            </div>
            <div className={style.descriptionWrapper}>
                <ul className={style.compositionDescription}>Skład:
                    <li className={style.composition}>{product.composition}</li>
                </ul>
                 <div className={style.descriptionTextWrapper}>
                    <h3 className={style.description}>Opis:</h3>
                   
                    <p className={style.descriptionText}>{product.description}</p>
                    {product.measurements !== null && product.measurements.length !== 0 ?
                    <div>
                    <p>Wymiary:</p>
                    <p>Długość: {product.measurements[0]?.length}cm</p>
                    <p>Szerokość: {product.measurements[0]?.width}cm</p>
                    {product.measurements[0]?.sleeve_length!== null? <p>Długość rękawów: {product.measurements[0]?.sleeve_length}cm</p> : ""}
                    {/* <p>Długość rękawów: {product.measurements[0]?.sleeve_length}cm</p> */}

                </div>: ""}
                </div>
                {/* <div className={style.descriptionTextWrapper}>
                    <h3 className={style.description}>Opis:</h3>
                   
                    <p className={style.descriptionText}>{product.description}</p>
                    <p>Wymiary:</p>
                    <p>Długość: {product.measurements[0]?.length}cm</p>
                    <p>Szerokość: {product.measurements[0]?.width}cm</p>
                    <p>Długość rękawów: {product.measurements[0]?.sleeve_length}cm</p>

                </div> */}
                <div>
                    <div className={style.descriptionMore} onClick={() => {
                        setAvaliableColors(!avaliableColors)
                    }}>
                        <h3 className={style.colors}>Dostępne kolory:</h3>
                        {avaliableColors ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className={style.descriptionMoreArrow} />}
                    </div>
                    <p className={`${style.colorsText} ${avaliableColors ? style.showText : ""}`}>Kolory w których występuje dana włóczka przedstawione są na zdjęciu. W zależności od parametrów wyświetlacza kolory mogą różnić się od faktycznego ich wyglądu. Dostępność kolorów może różnić się od faktycznej dostępności w danym momencie.</p>
                </div>
                <div className={style.delivery}>
                    <div className={style.descriptionMore} onClick={() => {
                        setHowToOrder(!howToOrder)
                    }}>
                        <h3>Sposób skladania zmównienia:</h3>
                        {howToOrder ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className={style.descriptionMoreArrow} />}
                    </div>
                    <p className={`${style.deliveryText} ${howToOrder ? style.showText : ""}`}>W celu złożenia zamówienia napisz do nas wiadomość na adres mailowy: <a className={style.mail} href={`mailto:${ROUTES.email}`}>{ROUTES.email}</a></p>
                </div>
                <div className={style.time}>
                    <div className={style.descriptionMore} onClick={() => {
                        setOrder(!order)
                    }}> <h3>Czas realizacji zamówienia:</h3>
                        {order ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className={style.descriptionMoreArrow} />}
                    </div>
                    <p className={`${style.orderText} ${order ? style.showText : ""}`}>Po zaksięgowaniu wpłaty za zamówienie czas realizacji wynosi od 5 do 21 dni</p>
                </div>
                <a href={`mailto:${ROUTES.email}?subject=${product.name}`} className={style.order} onClick={() => { analyticsEvent("cta", `cta_order_${product.name}`) }}>Zamów</a>
            </div>
        </div>
    )
}