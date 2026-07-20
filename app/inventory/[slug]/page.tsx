import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VehiclePage() {
  const images = [
    "/cars/car1.jpg",
    "/cars/car2.jpg",
    "/cars/car3.jpg",
    "/cars/car4.jpg",
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* Gallery */}
        <div className="grid gap-4 lg:grid-cols-[1fr_260px]">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl">

            <img
              src={images[0]}
              alt="Vehicle"
              className="h-[650px] w-full object-cover"
            />

            {/* arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white">
              <ChevronLeft />
            </button>

            <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white">
              <ChevronRight />
            </button>

          </div>


          {/* Side Images */}
          <div className="grid grid-rows-3 gap-4">

            {images.slice(1,4).map((img, i) => (
              <button
                key={img}
                className="overflow-hidden rounded-xl bg-white shadow transition hover:ring-2 hover:ring-blue-500"
              >
                <img
                  src={img}
                  alt={`Vehicle ${i}`}
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </button>
            ))}

          </div>

        </div>


        {/* Vehicle Info */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">


          {/* Left */}
          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              2019 Subaru Impreza
            </h1>


            <div className="mt-3 flex flex-wrap gap-3">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                AWD
              </span>

              <span className="rounded-full bg-slate-200 px-4 py-2">
                Automatic
              </span>

              <span className="rounded-full bg-slate-200 px-4 py-2">
                72,000 Miles
              </span>

            </div>


            <p className="mt-6 text-lg text-slate-600">
              Clean used vehicle. Runs and drives great.
              Contact us for more information.
            </p>

          </div>



          {/* Price Card */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <p className="text-sm text-slate-500">
              Price
            </p>


            <h2 className="text-4xl font-bold text-blue-600">
              $4,995
            </h2>


            <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
              Contact Seller
            </button>


          </div>


        </div>

      </div>
    </main>
  );
}