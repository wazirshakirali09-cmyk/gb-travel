import { useEffect,useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import BASE_URL from "../config/api"
import Loader from "../components/Loader"

export default function AdminDashboard(){

const [stats,setStats]=useState(null)

const navigate=useNavigate()

const logout=()=>{

localStorage.removeItem(
"adminToken"
)

navigate("/admin-login")

}

useEffect(()=>{

fetchStats()

},[])

const fetchStats=async()=>{

try{

const res=await fetch(
`${BASE_URL}/admin/stats`
)

const data=await res.json()

setStats(
data.data || {
hotels:0,
cars:0,
tours:0,
bookings:0
}
)

}

catch(error){

console.log(error)

}

}

if(!stats){

return <Loader/>

}

const cards=[

{
title:"Hotels",
value:stats.hotels,
icon:"🏨"
},

{
title:"Cars",
value:stats.cars,
icon:"🚘"
},

{
title:"Tours",
value:stats.tours,
icon:"🗺"
},

{
title:"Bookings",
value:stats.bookings,
icon:"📋"
}

]

return(

<div className="
bg-black
text-white
min-h-screen
pt-32
px-6
">

<div className="
max-w-7xl
mx-auto
">

<div className="
flex
justify-between
items-center
mb-10
">

<div>

<h1 className="
text-5xl
font-black
">

Admin

<span className="
text-cyan-400
">
Dashboard </span>

</h1>

<p className="
text-gray-400
mt-3
">

Travel system overview

</p>

</div>

<button
onClick={logout}
className="
bg-red-600
hover:bg-red-700
px-6
py-3
rounded-xl
font-bold
"

>

Logout

</button>

</div>

<div className="
grid
md:grid-cols-4
gap-6
">

{

cards.map((card,index)=>(

<div
key={index}
className="
bg-white/5
border
border-white/10
rounded-3xl
backdrop-blur-xl
p-8
hover:-translate-y-2
hover:shadow-cyan-500/20
hover:shadow-xl
transition
"
>

<div className="
text-5xl
">

{card.icon}

</div>

<h2 className="
mt-4
text-gray-400
">

{card.title}

</h2>

<h1 className="
text-5xl
font-black
mt-3
text-cyan-400
">

{card.value}

</h1>

</div>

))

}

</div>

<div className="
grid
md:grid-cols-4
gap-6
mt-12
">

<Link
to="/admin/hotels"
className="
bg-cyan-500
hover:bg-cyan-600
rounded-2xl
text-center
p-6
font-bold
"
>

🏨 Manage Hotels

</Link>

<Link
to="/admin/cars"
className="
bg-cyan-500
hover:bg-cyan-600
rounded-2xl
text-center
p-6
font-bold
"
>

🚘 Manage Cars

</Link>

<Link
to="/admin/tours"
className="
bg-cyan-500
hover:bg-cyan-600
rounded-2xl
text-center
p-6
font-bold
"
>

🗺 Manage Tours

</Link>

<Link
to="/admin/bookings"
className="
bg-cyan-500
hover:bg-cyan-600
rounded-2xl
text-center
p-6
font-bold
"
>

📋 Manage Bookings

</Link>

</div>

</div>

</div>

)

}
