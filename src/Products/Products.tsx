// import { useQuery } from "@tanstack/react-query"
// import { getProducts } from "../api/products"
// import style from "./Products.module.css";
// import { ProductItem } from "./ProductItem/ProductItem";
// import { Link } from "react-router-dom";
// import { Sorting } from "../Sorting/Sorting";
// import { useUserProductsContext } from "../Context/UserProductsContextProvider";
// // import { useLocation } from "react-router-dom";

// export default function Products() {
//     const { sortType } = useUserProductsContext();

//     console.log(sortType)
//     // const location = useLocation();
//     // const typeId = location.state;
//     // console.log(typeId)
//     const { isLoading, error, data: allProducts } = useQuery({
//         queryKey: ['products', sortType.column, sortType.ascendic],
//         queryFn: () => getProducts("", "", sortType.column, sortType.ascendic),
//     })

//     if (isLoading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Wystąpił błąd</p>
//     }

//     if (allProducts === undefined || allProducts === null) {
//         return <p>Spróbuj ponownie</p>
//     }

//     console.log(allProducts)


//     return (
//         <div className={`mainWrapper ${style.mainWrapper}`}>
//             <Sorting />
//             <div className={style.productsMainWrapper}>
//                 {/* <div className={style.pathWrapper}><Link to="/products">Produkty</Link></div> */}
//                 <div className={style.productsWrapper}>
//                     {allProducts.map(product => {
//                         return <ProductItem key={product.id} {...product} />
//                     })}
//                 </div>
//             </div>
//         </div>

//     )
// }

import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
// import style from "./Products.module.css";
// import { ProductItem } from "./ProductItem/ProductItem";
// import { Link } from "react-router-dom";
// import { Sorting } from "../Sorting/Sorting";
import { useUserProductsContext } from "../Context/UserProductsContextProvider";
// import AllProducts from "./AllProducts/AllProducts";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Skeleton from '@mui/material/Skeleton';
// import { SkeletonProductCard } from "../Skeleton/SkeletonProductCard/SkeletonProductCard";
// import { useLocation } from "react-router-dom";
import { SkeletonAllProducts } from "../Skeleton/SkeletonAllProducts/SkeletonAllProducts";
import AllProducts from "./AllProducts/AllProducts";

export default function Products() {
    const { sortType } = useUserProductsContext();
    const typeId = "all"
    console.log(sortType)
    // const location = useLocation();
    // const typeId = location.state;
    // console.log(typeId)
    const { isLoading, error, data: allProducts } = useQuery({
        queryKey: ['products', typeId, sortType.column, sortType.ascendic],
        queryFn: () => getProducts("", "", sortType.column, sortType.ascendic, typeId),
    })

    console.log(allProducts)

    if (isLoading) {
        return <SkeletonAllProducts />
            

       
    }

    if (error) {
        return <p>Wystąpił błąd</p>
    }

    if (allProducts === undefined || allProducts === null) {
        return <p>Spróbuj ponownie</p>
    }

    console.log(allProducts)
console.log(isLoading)
{/* <AllProducts allProducts={allProducts} productType={typeId} /> */}
    return (
        // <div>
<AllProducts allProducts={allProducts} productType={typeId} />

       


    )
}