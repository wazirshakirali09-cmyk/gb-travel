import { Navigate } from "react-router-dom"
import { useEffect,useState } from "react"
import Loader from "./components/Loader"

export default function ProtectedRoute({

children

}){

const [loading,setLoading]=useState(true)

const [authorized,setAuthorized]=useState(false)

useEffect(()=>{

const token=

localStorage.getItem(
"adminToken"
)

if(token){

setAuthorized(true)

}

setTimeout(()=>{

setLoading(false)

},500)

},[])

if(loading){

return <Loader/>

}

if(!authorized){

return(

<Navigate
to="/admin-login"
replace
/>

)

}

return children

}
