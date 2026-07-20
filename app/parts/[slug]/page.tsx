// PartDetailsPage.tsx

const part = {
  title: "2019 Subaru Impreza CVT Transmission",
  price: 1200,
  sku: "SUB-CVT-019",
  condition: "Used",
  stock: 1,
  description:
    "OEM CVT transmission removed from a running vehicle. Inspected before removal. Ready for installation.",
  images: [
    "/parts/cvt1.jpg",
    "/parts/cvt2.jpg",
    "/parts/cvt3.jpg",
  ],
  fits: [
    "2017 Subaru Impreza",
    "2018 Subaru Impreza",
    "2019 Subaru Impreza",
    "2020 Subaru Impreza",
  ]
};


export default function PartDetailsPage() {

return (
<div className="min-h-screen bg-gray-100">


{/* Header */}

<header className="
bg-white
shadow-sm
">

<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
">

<h1 className="text-2xl font-bold">
Schnettler Parts
</h1>


<button className="
bg-black
text-white
px-5
py-2
rounded-lg
">
Contact
</button>


</div>

</header>




<main className="
max-w-7xl
mx-auto
px-6
py-10
">


<div className="
grid
lg:grid-cols-2
gap-10
">



{/* Images */}

<section>


<div className="
bg-white
rounded-2xl
overflow-hidden
shadow
">

<img
src={part.images[0]}
className="
w-full
h-[500px]
object-cover
"
/>

</div>



<div className="
grid
grid-cols-3
gap-3
mt-4
">


{part.images.map((img,i)=>(

<img
key={i}
src={img}
className="
h-28
w-full
object-cover
rounded-lg
cursor-pointer
"
/>

))}


</div>


</section>





{/* Info */}

<section className="
bg-white
rounded-2xl
shadow
p-8
">


<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
">
{part.condition}
</span>



<h1 className="
text-4xl
font-bold
mt-5
">

{part.title}

</h1>



<p className="
text-gray-500
mt-3
">

SKU: {part.sku}

</p>



<div className="
text-5xl
font-bold
mt-8
">

${part.price}

</div>




<div className="
flex
gap-4
mt-8
">


<button className="
flex-1
bg-black
text-white
py-4
rounded-xl
font-bold
">

Buy Now

</button>


<button className="
flex-1
border
py-4
rounded-xl
font-bold
">

Message

</button>


</div>




<div className="
mt-10
border-t
pt-6
">


<h2 className="
font-bold
text-xl
">
Availability
</h2>


<p className="text-gray-600 mt-2">

In Stock: {part.stock}

</p>


</div>


</section>



</div>







{/* Lower info */}

<div className="
grid
md:grid-cols-2
gap-8
mt-10
">



<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-4
">

Description

</h2>


<p className="text-gray-600">

{part.description}

</p>


</div>





<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-4
">

Fits These Vehicles

</h2>


<ul className="space-y-2">


{part.fits.map(vehicle=>(

<li
key={vehicle}
className="
bg-gray-100
rounded-lg
p-3
"
>

✓ {vehicle}

</li>

))}


</ul>


</div>



</div>







{/* Trust */}

<div className="
mt-10
bg-black
text-white
rounded-xl
p-8
grid
md:grid-cols-3
gap-6
">


<div>
<h3 className="font-bold">
OEM Parts
</h3>
<p className="text-gray-300">
Original equipment parts
</p>
</div>


<div>
<h3 className="font-bold">
Inspected
</h3>
<p className="text-gray-300">
Checked before sale
</p>
</div>


<div>
<h3 className="font-bold">
Shipping Available
</h3>
<p className="text-gray-300">
Local pickup available
</p>
</div>


</div>



</main>


</div>
)

}