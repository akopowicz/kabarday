import { useProductsContext } from "../../Context/ProductsContextProvider"
import { ProductDetail } from "../ProductDetail/ProductDetail"
import style from './ProductTable.module.css'

export const ProductsTable = () => {
  const { filteredProducts } = useProductsContext()

  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>Nazwa Produktu</th>
          <th>Cena</th>
          <th>Skład</th>
          <th>Dostępne ilości</th>
          <th>Płeć</th>
          <th>Typ</th>
          <th>Edytuj</th>
          <th>Usuń</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {filteredProducts?.map(product => {
          return <ProductDetail key={product.id} product={product} />
        })}
      </tbody>
    </table>
  )
}