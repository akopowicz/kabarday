import supabase from "../supabase/supabase"

type PhotoType ={ 
    product_id: string,
    link: string
}

export const addNewPhoto = async ({product_id,link}: PhotoType) => {

    const { data, error } = await supabase
      .from('photo')
      .insert(
        { product_id, link },
      )
      .select()
  
     
  
    console.log(error)
    return data
  }