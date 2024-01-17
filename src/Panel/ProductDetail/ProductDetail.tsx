import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import style from './ProductDetail.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Database } from '../../supabase/types/supabase'

export type productTypeType = {
    type_name: string,
}

// export type ProductType = {
//     composition: string | null,
//     description: string | null,
//     name:string | null,
//     price: number | null,
//     product_type:productTypeType | null,
//     sex: string | null,
//     stock: number | null,
//     id: string,
// }

export const useDisclosure = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return {
        open,
        handleClickOpen,
        handleClose
    }
}

export const ProductDetail = ({ product }: { product: Database["public"]["Tables"]["products"]["Row"] }) => {
    const { open,
        handleClickOpen,
        handleClose } = useDisclosure()
    return (
        <tr className={style.tr}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.composition}</td>
            <td>{product.stock}</td>
            <td>{product.sex}</td>
            <td>{product.type_id}</td>
            <td><Link to={`/product/${product.name}/edit`} state={product}><ModeEditIcon /></Link></td>
            <td onClick={handleClickOpen}><DeleteIcon /></td>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Usunięcie produktu"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Czy jesteś pewien że chcesz usunąć produkt: {product.name}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Anuluj</Button>
                    <Link to={`/product/${product.name}/remove`} state={product.id}>Usuń</Link>
                </DialogActions>
            </Dialog>
        </tr>
    )
}
