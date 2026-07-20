import { Car, Search } from "lucide-react";

export default function UsedVehiclesPage() {
    const vehicles = [
        {
            id: 1,
            url: "2019-subaru-impreza-1",
            year: 2019,
            make: "Subaru",
            model: "Impreza",
            price: "$4,995",
            mileage: "138,000 mi",
        },
        {
            id: 2,
            url: "2012-honda-civic-2",
            year: 2012,
            make: "Honda",
            model: "Civic",
            price: "$3,750",
            mileage: "164,000 mi",
        },
        {
            id: 3,
            url: "2014-ford-focus-3",
            year: 2014,
            make: "Ford",
            model: "Focus",
            price: "$4,250",
            mileage: "119,000 mi",
        },
        {
            id: 4,
            url: "2011-toyota-camry-4",
            year: 2011,
            make: "Toyota",
            model: "Camry",
            price: "$4,900",
            mileage: "171,000 mi",
        },
        {
            id: 5,
            url: "2015-jeep-patriot-5",
            year: 2015,
            make: "Jeep",
            model: "Patriot",
            price: "$4,800",
            mileage: "142,000 mi",
        },
        {
            id: 6,
            url: "2013-chevrolet-malibu-6",
            year: 2013,
            make: "Chevrolet",
            model: "Malibu",
            price: "$3,995",
            mileage: "156,000 mi",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-slate-900">
                        Used Vehicles
                    </h1>

                    <p className="mt-3 text-lg text-slate-600">
                        Browse our current inventory of affordable used vehicles.
                    </p>
                </div>

                {/* Search */}
                <div className="mx-auto mb-12 max-w-xl">
                    <div className="relative">
                        <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            size={20}
                        />

                        <input
                            type="text"
                            placeholder="Search inventory..."
                            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {vehicles.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100">
                                <div className="flex h-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    <Car size={72} className="text-slate-400" />
                                </div>

                                <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                                    Available
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-slate-900">
                                    {vehicle.year} {vehicle.make} {vehicle.model}
                                </h2>

                                <p className="mt-3 text-3xl font-bold text-blue-600">
                                    {vehicle.price}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    {vehicle.mileage}
                                </p>

                                <a href={`/${vehicle.url}`}>
                                    <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                        View Details
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}