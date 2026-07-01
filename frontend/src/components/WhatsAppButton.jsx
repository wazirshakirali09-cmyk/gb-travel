export default function WhatsAppBar(){

const phoneNumber = "92300XXXXXXX" // apna number yahan set karna

const message =
"Hello! I need help with booking (Hotels/Cars/Tours)"

const url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

return(

<a
href={url}
target="_blank"
rel="noreferrer"
className="
fixed
bottom-6
right-6
bg-green-500
hover:bg-green-600
text-white
p-4
rounded-full
shadow-2xl
shadow-green-500/30
z-50
animate-pulse
"

>

💬

</a>

)

}
