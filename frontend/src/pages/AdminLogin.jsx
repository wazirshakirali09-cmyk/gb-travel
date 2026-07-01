import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {

const navigate=useNavigate()

const [showPassword,setShowPassword]=useState(false)

const [loading,setLoading]=useState(false)

const [form,setForm]=useState({

email:"",
password:"",
remember:false

})

const handleChange=(e)=>{

const {name,value,type,checked}=e.target

setForm({

...form,
[name]:
type==="checkbox"
? checked
: value

})

}

const handleSubmit=(e)=>{

e.preventDefault()

if(
!form.email ||
!form.password
){

alert("Please fill all fields")
return

}

setLoading(true)

setTimeout(()=>{

localStorage.setItem(
"adminToken",
"adminLogged"
)

navigate("/admin")

setLoading(false)

},1500)

}

return(

<div className="
bg-black
min-h-screen
flex
justify-center
items-center
px-6
text-white
">

<div className="
w-full
max-w-md
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[35px]
p-8
shadow-2xl
shadow-cyan-500/10
">

<div className="text-center">

<h1 className="
text-4xl
font-black
">

Admin

<span className="
text-cyan-400
">
Login </span>

</h1>

<p className="
text-gray-400
mt-3
">

Secure dashboard access

</p>

</div>

<form
onSubmit={handleSubmit}
className="
mt-8
space-y-5
"
>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Admin Email"
className="
w-full
bg-black
p-4
rounded-xl
outline-none
border
border-white/10
"
/>

<div className="relative">

<input
type={
showPassword
? "text"
: "password"
}
name="password"
value={form.password}
onChange={handleChange}
placeholder="Password"
className="
w-full
bg-black
p-4
rounded-xl
outline-none
border
border-white/10
"
/>

<button
type="button"
onClick={()=>
setShowPassword(
!showPassword
)
}
className="
absolute
right-4
top-4
text-gray-400
"

>

{showPassword ? "🙈" : "👁"}

</button>

</div>

<div className="
flex
justify-between
items-center
text-sm
">

<label className="
flex
items-center
gap-2
">

<input
type="checkbox"
name="remember"
checked={form.remember}
onChange={handleChange}
/>

Remember me

</label>

<p className="
text-cyan-400
cursor-pointer
">

Forgot Password?

</p>

</div>

<button
className="
w-full
bg-cyan-500
py-4
rounded-xl
font-bold
hover:bg-cyan-600
transition
"

disabled={loading}

>

{
loading
?
"Logging in..."
:
"Login"
}

</button>

</form>

</div>

</div>

)

}
