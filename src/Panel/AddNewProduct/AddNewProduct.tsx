import { useFormik, FormikProps } from 'formik';
import TextField from '@mui/material/TextField';
import { AddProductSchema, addProductValidationSchema, getProductsType, addNewProduct } from "../../api/products";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { SelectChangeEvent } from '@mui/material';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { ErrorPage } from '../../ErrorPage/ErrorPage';
const FormInput = ({ accessor, formik, type, label }: {
  formik: FormikProps<AddProductSchema>;
  accessor: keyof AddProductSchema;
  type?: string;
  label: string;
}) => {
  return (
    <TextField
      error={Boolean(formik.touched[accessor] && formik.errors[accessor])} //oznacza pole na czerwono
      id={accessor}
      name={accessor}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[accessor]}
      type={type}
      label={label}
    />
  )
}

export default function AddNewProduct() {
  const role = useSelector((state: RootState) => state.user.role)
  const queryClient = useQueryClient();

  const formik = useFormik<AddProductSchema>({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      composition: '',
      stock: 0,
      sex: '',
      type: '',
      photo: ''
    },
    validationSchema: addProductValidationSchema,
    onSubmit: () => {
      mutation.mutate(formik.values)
      formik.resetForm();
    },
  });

  const mutation = useMutation({
    mutationFn: (values: AddProductSchema) => addNewProduct(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {
      console.log("Cos poszlo nie tak")
    }
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ['productType'],
    queryFn: getProductsType
  })

  if (error) {
    return <p>Cannot get orders</p>
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data === undefined) {
    return <p>Spróbuj ponownaie</p>
  }

  const handleChange = (event: SelectChangeEvent) => {

    formik.setFieldValue("type", event.target.value)

  };

    return (
    <div>
      {role === "admin" ?

        <form onSubmit={formik.handleSubmit}>
          <select
            name="productType"
            onChange={()=>handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block" }}
          >
            <option value="" label="Wybierz typ produktu">
              Wybierz typ produktu
            </option>
            {data?.map((productType, id) => {
              return (
                <option key={id} value={productType.id} label={productType.type_name}>
                </option>
              )
            })}
          </select>

          <FormInput accessor="name" formik={formik} label="Nazwa produktu"></FormInput>
          <FormInput accessor="description" formik={formik} label="opis"></FormInput>

          <FormInput accessor="price" label='Cena' formik={formik}></FormInput>
          <FormInput accessor="composition" formik={formik} label="Skład"></FormInput>
          <FormInput accessor="stock" label='Dostępne sztuki' formik={formik}></FormInput>
          <FormInput accessor="sex" label="Płeć" formik={formik}></FormInput>
          {/* <input type="file" onChange={handlePhotoChange} /> */}

          <button type='submit'>Dodaj Produkt</button>

        </form> : <ErrorPage />}
      <br />
      <Link to="/panel">Panel Administratora</Link>
    </div>
  )
}


