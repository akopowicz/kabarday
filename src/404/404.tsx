import {useEffect} from 'react'
import {useLocation, redirect } from "react-router-dom"

export const Page404 = () => {
  const location = useLocation();

  useEffect(()=>{
    redirect(location.pathname + location.search)
  },[location.pathname, location.search])
  return (
    <div>Page404</div>
  )
}
