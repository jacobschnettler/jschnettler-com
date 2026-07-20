// PartsPage.tsx

const parts = [
  {
    id: 1,
    title: "2019 Subaru Impreza CVT Transmission",
    price: 1200,
    image: "/parts/cvt.jpg",
    fitment: "2017-2021 Subaru Impreza",
    condition: "Used",
    sku: "SUB-CVT-019",
  },
  {
    id: 2,
    title: "2005 Crown Victoria P71 Alternator",
    price: 75,
    image: "/parts/alternator.jpg",
    fitment: "2003-2011 Crown Victoria",
    condition: "Used",
    sku: "CVPI-ALT-001",
  },
  {
    id: 3,
    title: "OEM Subaru Engine Harness",
    price: 250,
    image: "/parts/harness.jpg",
    fitment: "Subaru Models",
    condition: "Used",
    sku: "SUB-WIRE-001",
  },
];


export default function PartsPage() {

  return (
    <div className="min-h-screen bg-gray-100">


      {/* Top bar */}
      <header className="
        bg-white
        shadow-sm
        sticky
        top-0
        z-10
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

          <div>
            <h1 className="text-2xl font-bold">
              Schnettler Parts
            </h1>

            <p className="text-sm text-gray-500">
              Used OEM Auto Parts
            </p>
          </div>


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
        py-8
      ">


        {/* Search */}
        <div className="
          bg-white
          rounded-xl
          shadow
          p-5
          mb-8
        ">

          <input
            placeholder="Search parts, vehicles, SKU..."
            className="
              w-full
              border
              rounded-lg
              p-4
              outline-none
            "
          />

        </div>



        <div className="grid lg:grid-cols-4 gap-8">


          {/* Filters */}

          <aside className="
            bg-white
            rounded-xl
            shadow
            p-5
            h-fit
          ">

            <h2 className="
              font-bold
              text-lg
              mb-4
            ">
              Filters
            </h2>


            <div className="space-y-4">


              <select className="w-full border p-3 rounded">
                <option>Make</option>
                <option>Subaru</option>
                <option>Ford</option>
              </select>


              <select className="w-full border p-3 rounded">
                <option>Category</option>
                <option>Engine</option>
                <option>Transmission</option>
                <option>Electrical</option>
              </select>


              <select className="w-full border p-3 rounded">
                <option>Condition</option>
                <option>Used</option>
                <option>New</option>
              </select>


            </div>


          </aside>




          {/* Inventory */}

          <section className="
            lg:col-span-3
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          ">


          {parts.map((part) => (

            <div
              key={part.id}
              className="
                bg-white
                rounded-xl
                shadow
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >


              <img
                src={part.image}
                alt={part.title}
                className="
                  w-full
                  h-48
                  object-cover
                "
              />


              <div className="p-5">


                <span className="
                  text-xs
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                ">
                  {part.condition}
                </span>



                <h3 className="
                  font-bold
                  text-lg
                  mt-3
                ">
                  {part.title}
                </h3>



                <p className="text-gray-500 mt-2">
                  Fits: {part.fitment}
                </p>


                <p className="text-gray-400 text-sm">
                  SKU: {part.sku}
                </p>



                <div className="
                  flex
                  justify-between
                  items-center
                  mt-5
                ">


                  <p className="
                    text-2xl
                    font-bold
                  ">
                    ${part.price}
                  </p>


                  <button className="
                    bg-black
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  ">
                    View
                  </button>


                </div>


              </div>


            </div>

          ))}


          </section>


        </div>


      </main>


    </div>
  );
}