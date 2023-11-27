// import { useQuery } from "@tanstack/react-query";
// import { getProducts, AddProductSchema, getProductsType } from "../api/products";
// import { ProductDetail } from '../Panel/ProductDetail/ProductDetail'
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../Redux/store";
// import { ErrorPage } from "../ErrorPage/ErrorPage";
// import { useEffect, useState } from "react";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { ProtectedWrapper } from "../ProtectedWrapper/ProtectedWrapper";
// import style from './AdminPanel/AdminPanel.module.css'

// export const AdminPanel = () => {
//   const [type, setType] = useState("all")
//   const [search,setSearch]=useState("")
//   const role = useSelector((state: RootState) => state.user.role)

//   const { isLoading, error, data: products } = useQuery({
//     queryKey: ['products',search, type],
//     queryFn: ()=>getProducts(search, type)
//   })

//   const { isLoading: typeLoading, error: typeError, data: productsTypes } = useQuery({
//     queryKey: ['productsTypes'],
//     queryFn: getProductsType
//   })

//   const filterProductFunction = (search: string) => {
//     setSearch(search.toLowerCase())
//   }

//   const filterByType = (event) => {
//     setType(event.target.value as string)
//   }

//   if (error || typeError) {
//     return <p>Cannot get products</p>
//   }
//   if (isLoading || typeLoading) {
//     return <p>Loading...</p>;
//   }

//   if (products === undefined) {
//     return <p>Spróbuj ponownaie</p>
//   }




//   return (
//     <div>
//         <div>
//           <div>
//             <p>Produkty</p>
//           </div>
//           <div>
//             <Link to="/panel/addProuct">Dodaj Product</Link>
//             <div className="search_input_wrapper">
//               <input placeholder="Wyszukaj Produkt" onChange={(e) => { filterProductFunction(e.target.value) }} value={search}/>
//               <FormControl fullWidth>
//                 <InputLabel id="select-label">Typ</InputLabel>
//                 <Select
//                   labelId="select-label"
//                   id="simple-select"
//                   value={type}
//                   label="type"
//                   onChange={filterByType}
//                 >
//                   <MenuItem value={"all"}>Wszystkie</MenuItem>
//                   {productsTypes?.map(productType => {
//                     return <MenuItem key={productType.id} value={productType.id}>{productType.type_name}</MenuItem>
//                   })}

//                 </Select>
//               </FormControl>

//             </div>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Nazwa Produktu</th>
//                   <th>Opis</th>
//                   <th>Cena</th>
//                   <th>Skład</th>
//                   <th>Dostępne ilości</th>
//                   <th>Płeć</th>
//                   <th>Typ</th>
//                   <th>Edytuj</th>
//                   <th>Usuń</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products?.map(product => {
//                   return <ProductDetail key={product.id} product={product} />
//                 })}
//               </tbody>
//             </table>

//           </div>
//         </div> 
//     </div>
//   )
// }


import { useQuery } from "@tanstack/react-query";
import { getProducts, AddProductSchema, getProductsType } from "../api/products";
import { ProductDetail } from '../Panel/ProductDetail/ProductDetail'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ProtectedWrapper } from "../ProtectedWrapper/ProtectedWrapper";
import style from './AdminPanel/AdminPanel.module.css'
import { SearchForProduct } from "./SearchForProduct/SearchForProduct";
import { GetProductsByType } from "./GetProductsByType/GetProductsByType";
import { ProductsContextProvider } from "../Context/ProductsContextProvider";
import { ProductsTable } from "./ProductTable/ProductsTable";
import { SideMenu } from "./SideMenu/SideMenu";

export const AdminPanel = () => {
  // const [type, setType] = useState("all")
  // const [search,setSearch]=useState("")
  // const role = useSelector((state: RootState) => state.user.role)
  // const productType = useSelector((state: RootState) => state.product.productType)


  // console.log(productType)
  // const { isLoading, error, data: products } = useQuery({
  //   queryKey: ['products',search, type],
  //   queryFn: ()=>getProducts(search, type)
  // })

  // const { isLoading: typeLoading, error: typeError, data: productsTypes } = useQuery({
  //   queryKey: ['productsTypes'],
  //   queryFn: getProductsType
  // })

  // const filterProductFunction = (search: string) => {
  //   setSearch(search.toLowerCase())
  // }

  // const filterByType = (event) => {
  //   setType(event.target.value as string)
  // }

  // if (error || typeError) {
  //   return <p>Cannot get products</p>
  // }
  // if (isLoading || typeLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (products === undefined) {
  //   return <p>Spróbuj ponownaie</p>
  // }




  return (
    <div className={style.adminPanel}>
      <ProductsContextProvider>

        {/* <div> */}
        {/* <div>
            <p>Produkty</p>
          </div> */}
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
          {/* <div className="search_input_wrapper">
              <input placeholder="Wyszukaj Produkt" onChange={(e) => { filterProductFunction(e.target.value) }} value={search}/>
              <FormControl fullWidth>
                <InputLabel id="select-label">Typ</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  value={type}
                  label="type"
                  onChange={filterByType}
                >
                  <MenuItem value={"all"}>Wszystkie</MenuItem>
                  {productsTypes?.map(productType => {
                    return <MenuItem key={productType.id} value={productType.id}>{productType.type_name}</MenuItem>
                  })}
                 
                </Select>
              </FormControl>
             
            </div> */}
          {/* <table>
              <thead>
                <tr>
                  <th>Nazwa Produktu</th>
                  <th>Opis</th>
                  <th>Cena</th>
                  <th>Skład</th>
                  <th>Dostępne ilości</th>
                  <th>Płeć</th>
                  <th>Typ</th>
                  <th>Edytuj</th>
                  <th>Usuń</th>
                </tr>
              </thead>
              <tbody>
                {products?.map(product => {
                  return <ProductDetail key={product.id} product={product} />
                })}
              </tbody>
            </table> */}

        </div>
        {/* </div> */}
      </ProductsContextProvider>
    </div>
  )
}