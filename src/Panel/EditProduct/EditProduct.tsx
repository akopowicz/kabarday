import { Form, Formik, FormikProps } from 'formik';
import TextField from '@mui/material/TextField';
import { Link, useLocation } from "react-router-dom";
import {UpdateProductFormValues, updateProductById, updateProductSchema} from "../../api/products"

import { useMutation, useQueryClient } from "@tanstack/react-query";

const FormInput = ({ accessor, formik }: {
    formik: FormikProps<UpdateProductFormValues>;
    accessor: keyof UpdateProductFormValues;
}) => {
    return (
        <TextField
            error={Boolean(formik.touched[accessor] && formik.errors[accessor])} //oznacza pole na czerwono
            helperText={formik.touched[accessor] && formik.errors[accessor] ? formik.errors[accessor] : null} // wyswietla text pomocniczy pod spodem
            id={accessor}
            name={accessor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[accessor]}
        />
    )
}

export default function EditProduct() {
    

    const location = useLocation();
    const product = location.state;

    const queryClient=useQueryClient()

    const mutation = useMutation({
        mutationFn: (values:UpdateProductFormValues) => updateProductById(values, product.id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['products']});
        },
        onError: () => {
            console.log("Cos poszlo nie tak")
        }
    });

    const onSubmit = (values: UpdateProductFormValues) => {
        mutation.mutate(values)
    }

    return (
        <Formik<UpdateProductFormValues>
            initialValues={{
                
                name: product.name,
                description: product.description,
                price: product.price,
                composition: product.composition,
                stock: product.stock,
                sex: product.sex,
            }}
            onSubmit={onSubmit}
            validationSchema={updateProductSchema}
            enableReinitialize
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <div>
                                <label htmlFor="name">Nazwa Produktu:</label>
                                <FormInput accessor="name" formik={formik}></FormInput>
                            </div>
                            <div>
                                <label htmlFor="description">Opis:</label>
                                <FormInput accessor="description" formik={formik}></FormInput>
                            </div>
                            <div>
                                <label htmlFor="price">Cena:</label>
                                <FormInput accessor="price" formik={formik}></FormInput>
                            </div>
                            <div>
                                <label htmlFor="composition">Skład:</label>
                                <FormInput accessor="composition" formik={formik}></FormInput>
                            </div>
                            <div>
                                <label htmlFor="stock">Dostępna ilość:</label>
                                <FormInput accessor="stock" formik={formik}></FormInput>
                            </div>
                            <div>
                                <label htmlFor="sex">Płeć:</label>
                                <FormInput accessor="sex" formik={formik}></FormInput>
                            </div>
                            <button type='submit'>Zaktualizuj</button>
                            <Link to='/panel'>Cancel</Link>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}