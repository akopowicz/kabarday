import { Link } from "react-router-dom";
import style from './AdminPanel/AdminPanel.module.css'
import { SearchForProduct } from "./SearchForProduct/SearchForProduct";
import { GetProductsByType } from "./GetProductsByType/GetProductsByType";
import { ProductsContextProvider } from "../Context/ProductsContextProvider";
import { ProductsTable } from "./ProductTable/ProductsTable";
import { SideMenu } from "./SideMenu/SideMenu";

export default function AdminPanel() {
  return (
    <div className={style.adminPanel}>
      <ProductsContextProvider>

        <SideMenu />
        <div className={style.content_wrapper}>
          <div className={style.content_wrapper_2}>

          </div>
          <h2 className={style.title}>Admin Panel</h2>
          <div className={style.search_wrapper}>
            <Link to="/panel/addProuct" className={style.add_button}>Dodaj Product +</Link>
            <GetProductsByType />
            <SearchForProduct />
          </div>
          <ProductsTable></ProductsTable>
          
        </div>
      </ProductsContextProvider>
    </div>
  )
}