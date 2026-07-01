import { useState } from "react"

export default function SearchBar({

data=[],
onFilter

}){

const [search,setSearch]=useState("")

const handleSearch=(value)=>{

setSearch(value)

const filtered=data.filter((item)=>

(item.name || "")
.toLowerCase()
.includes(
value.toLowerCase()
)

)

onFilter(filtered)

}

return(

<div className="
max-w-3xl
mx-auto
px-6
mb-12
">

<div className="
relative
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
overflow-hidden
">

<input

type="text"

placeholder="
Search hotels, cars, tours...
"

value={search}

onChange={(e)=>
handleSearch(
e.target.value
)
}

className="
w-full
bg-transparent
text-white
px-14
py-5
outline-none
placeholder:text-gray-500
"

/>

<div className="
absolute
left-5
top-1/2
-translate-y-1/2
text-gray-400
text-xl
">

🔍

</div>

</div>

</div>

)

}
