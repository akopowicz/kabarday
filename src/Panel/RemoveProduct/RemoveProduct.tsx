import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { removeProduct } from "../../api/products"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function RemoveProduct() {
    const location = useLocation()
    const productId = location.state
    const queryClient = useQueryClient();
    useEffect(() => {
        // removeProduct(productId)
        mutation.mutate(productId)
    }, [])

    const mutation = useMutation({
        mutationFn: (values:string) => removeProduct(values),
        onSuccess: () => {
    
          // rewalidacja i pobranie ponownie zapytania pod kluczem orders
          // queryClient.invalidateQueries([`product`,id]);
          queryClient.invalidateQueries({ queryKey: ['products'] });
        },
        onError: () => {
          console.log("Cos poszlo nie tak")
        }
      });
    
    return(
        <div>
             <p>Produkt został usunięty</p>
            <Link to="/panel">Panel Administratora</Link>
        </div>
    )
}