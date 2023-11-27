import supabase from "../supabase/supabase";

export async function uploadFile(file:File) {
    const { data, error } = await supabase.storage.from('kabarday').upload('products', file)
    if (error) {
      // Handle error
      console.log("error in bucket add",error)
    } else {
      // Handle success
      return data
    }
  }
  