import { InferType, number, object, string, mixed } from "yup";
import supabase from "../supabase/supabase";
import { uploadFile } from "./files";
import { addNewPhoto } from "./photos";


export const addProductValidationSchema = object({
  name: string().min(1, "Minimalna ilość zamówienia musi wynosić 1").required("Pole wymagane"),
  description: string().required("Pole wymagane"),
  price: number().min(10, "Minimalna cena 10 zł").required("Pole wymagane"),
  composition: string().required(),
  stock: number().required(),
  sex: string().required(),
  type: string().required(),
  photo: mixed().required('File is required'),
});

export type AddProductSchema = InferType<typeof addProductValidationSchema>;

export const getProductsType = async () => {
  const { data: productType, error } = await supabase
    .from('product_type')
    .select()
  console.log(error)
  console.log(productType)

  return productType

};



export const addNewProduct = async (addProductData: AddProductSchema) => {

  const { data, error } = await supabase
    .from('products')
    .insert(
      { name: addProductData.name, description: addProductData.description, price: addProductData.price, composition: addProductData.composition, stock: addProductData.stock, sex: addProductData.sex, type_id: addProductData.type },
    )
    .select()
  if (data) {
    //uploadFile
    const bucketData = await uploadFile(addProductData.photo as File)
    console.log(bucketData?.path)
    if (bucketData?.path) {
      //do bazy dodać link z id produktu
      addNewPhoto({ product_id: data[0].id, link: 'aaaa' })
    }
  }

  console.log(error)
  return data
}


export const getProducts = async (search?: string, id?: string) => {

  let query = supabase.from('products').select(`
  *, 
  product_type ( type_name, id ),
  photos (product_id, id, photo_link)
`)

  console.log(id)
  if (search) {
    query = query.ilike("name", `%${search}%`)
  }
  if (id && id !== "all") {
    // query = query.ilike("type_id", id)
    query = query.eq('type_id', id)
  }
  const { data: products, error } = await query;
  console.log(error)
  console.log(products)
  return products
}

export const getProductsWithType = async (type?: string) => {

  let query = supabase.from('products').select(`
  *, 
  product_type ( type_name, id ),
  photos (product_id, id, photo_link)
`)
  
  if (type) {
    // query = query.ilike("type_id", id)
    query = query.eq('type_id', type)
  }
  const { data: products, error } = await query;
  console.log(error)
  console.log(products)
  return products
}



export const removeProduct = async (id: string) => {

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  console.log(error)
};



export const updateProductSchema = object({
  name: string().min(1, "Minimalna ilość zamówienia musi wynosić 1").required("Pole wymagane"),
  description: string().required("Pole wymagane"),
  price: number().min(10, "Minimalna cena 10 zł").required("Pole wymagane"),
  composition: string().required(),
  stock: number().required(),
  sex: string().required(),
});

export type UpdateProductFormValues = InferType<typeof updateProductSchema>;

export const updateProductById = async (updateProductData: UpdateProductFormValues, productId: string) => {
  const { data, error } = await supabase
    .from('products')
    .update(updateProductData)
    .eq('id', productId)
    .select('*')

  console.log(error)
  return data
}

export const getProduct = async (id: string) => {

  const { data: product, error } = await supabase.from('products').select(`
  *, 
  product_type ( type_name, id ),
  photos (product_id, id, photo_link)
`)
    .eq('id', id)

  console.log(error)
  console.log(product)
  return product
}

export const getSimilarProducts = async (id: string) => {

  const { data: product, error } = await supabase.from('products').select(`
  *, 
  product_type ( type_name, id ),
  photos (product_id, id, photo_link)
`)
    .neq('id', id)
    .range(0, 3)

  console.log(error)
  console.log(product)
  return product
}

export const getProductsForHomePage = async () => {

  const { data: product, error } = await supabase.from('products').select(`
  *, 
  product_type ( type_name, id ),
  photos (product_id, id, photo_link)
`)
    .range(0, 5)

  console.log(error)
  console.log(product)
  return product
}


export const getSearchProducts = async (search: string, quantity?: number) => {

  let query = supabase.from('products').select(`
  *, 
  product_type ( type_name, id ),
  photos (product_id, id, photo_link)
`)

console.log(search)

  query = query.ilike("name", `%${search}%`)
  if (quantity) {
    // query = query.ilike("type_id", id)
    query = query.range(0, quantity)
  }
  const { data: products, error } = await query;
  console.log(error)
  console.log(products)
  return products
}