import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import style from './Search.module.css';
import { useUserProductsContext } from '../Context/UserProductsContextProvider';
import { getSearchProducts } from '../api/products';
import { useQuery } from '@tanstack/react-query';
import { SearchItem } from './SearchItem/SearchItem';
import { useRef, useEffect } from 'react';
// import { useProductsContext } from '../Context/ProductsContextProvider';


export const Search = ({ showSearch }: { showSearch: () => void }) => {
    const { userSearchProducts, setUserSearchProducts } = useUserProductsContext();
    const newRef = useRef<HTMLDivElement>(null);
    // const {showSearchBar, setShowSearchBar } = useProductsContext();
    

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      });
    
      const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as Node;
        if (newRef.current && !newRef.current.contains(target)) {
            setUserSearchProducts('')
        }
      };

    const { error, data: products } = useQuery({
        queryKey: ['searchProducts', userSearchProducts],
        queryFn: () => getSearchProducts(userSearchProducts, 4)
    })


    const filterProductFunction = (search: string) => {
        setUserSearchProducts(search.toLowerCase())
    }

    const cleanSerach = () => {
        setUserSearchProducts('')
    }


    


    if (error) {

        // return <p>Spróbuj ponownie później</p>
    }

    if (products === undefined) {
        // return <p>Spróbuj ponownie</p>
    }

   
    return (
        <div ref={newRef}>
            <div className={style.inputWrapper} >
                <input type="text"  placeholder="Wyszukaj produkt" className={style.serachInput} onChange={(e) => { filterProductFunction(e.target.value) }} value={userSearchProducts} />
                {userSearchProducts.length > 1 ? <CloseIcon className={style.closeSearch} onClick={cleanSerach} /> : <SearchIcon className={style.searchIcon} />}
            </div>

            <CloseIcon className={style.closeSearchMobile} onClick={showSearch} />
            {userSearchProducts.length > 1 ? <div className={style.searchOutput} onClick={showSearch}>

                {products && products.length > 0 ? products?.map(product => {
                    // eslint-disable-next-line
                    //@ts-ignore
                    return <SearchItem cleanSerach={cleanSerach} key={product.id} {...product} />
                }) : <p className={style.cantFind}>{`Nie znaleziono produktu: ${userSearchProducts}`}</p>}
            </div> : ""}

        </div>
    )
}