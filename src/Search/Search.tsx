import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import style from './Search.module.css';
import { useUserProductsContext } from '../Context/UserProductsContextProvider';
import { getSearchProducts } from '../api/products';
import { useQuery } from '@tanstack/react-query';
import { SearchItem } from './SearchItem/SearchItem';

export const Search = ({ showSearch }: { showSearch: () => void }) => {
    const { userSearchProducts, setUserSearchProducts } = useUserProductsContext();

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
        // return <p>Cannot get products</p>
    }

    if (products === undefined) {
        // return <p>Spróbuj ponownie</p>
    }

    return (
        <div>
            <div className={style.inputWrapper}>
                <input type="text" placeholder="Wyszukaj produkt" className={style.serachInput} onChange={(e) => { filterProductFunction(e.target.value) }} value={userSearchProducts} />
                {userSearchProducts.length > 1 ? <CloseIcon className={style.closeSearch} onClick={cleanSerach} /> : <SearchIcon className={style.searchIcon} />}
            </div>

            <CloseIcon className={style.closeSearchMobile} onClick={showSearch} />
            {userSearchProducts.length > 1 ? <div className={style.searchOutput} onClick={showSearch}>


                {products?.map(product => {
                    // eslint-disable-next-line
                    //@ts-ignore
                    return <SearchItem key={product.id} {...product} />
                })}

            </div> : ""}

        </div>
    )
}