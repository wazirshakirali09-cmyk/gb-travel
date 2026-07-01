import { useState } from "react"

export default function Contact() {

const [form,setForm]=useState({

name:"",
email:"",
message:""

})

const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:e.target.value

})

}

const handleSubmit=(e)=>{

e.preventDefault()

alert("Message Sent Successfully ✅")

setForm({

name:"",
email:"",
message:""

})

}

return(

<div className="
bg-black
text-white
min-h-screen
pt-32
px-6
">

<section className="
text-center
mb-16
">

<h1 className="
text-5xl
md:text-7xl
font-black
">

Contact

<span className="
text-cyan-400
">
{" "}Us </span>

</h1>

<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Get in touch for hotels,
cars and premium tours

</p>

</section>

<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
">

<div className="
space-y-6
">

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
backdrop-blur-xl
">

<h2 className="
text-xl
font-bold
">

📍 Address

</h2>

<p className="
mt-3
text-gray-400
">

Gilgit Baltistan,
Pakistan

</p>

</div>

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
backdrop-blur-xl
">

<h2 className="
text-xl
font-bold
">

📞 Phone

</h2>

<p className="
mt-3
text-gray-400
">

+92 XXX XXXXXXX

</p>

</div>

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
backdrop-blur-xl
">

<h2 className="
text-xl
font-bold
">

✉ Email

</h2>

<p className="
mt-3
text-gray-400
">

[info@gbtravel.com](mailto:info@gbtravel.com)

</p>

</div>

</div>

<form
onSubmit={handleSubmit}
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
backdrop-blur-xl
"
>

<h2 className="
text-2xl
font-bold
mb-6
">

Send Message

</h2>

<div className="
space-y-5
">

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Full Name"
className="
w-full
bg-black
p-4
rounded-xl
outline-none
"
/>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email"
className="
w-full
bg-black
p-4
rounded-xl
outline-none
"
/>

<textarea
rows="6"
name="message"
value={form.message}
onChange={handleChange}
placeholder="Your Message"
className="
w-full
bg-black
p-4
rounded-xl
outline-none
"
/>

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
>

Send Message

</button>

</div>

</form>

</div>

</div>

)

}
