export function Reviews() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          What Customers Say
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Real feedback from local customers we’ve helped.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-gray-700">
              “Super fast service. He came right to my house and fixed my car the same day.”
            </p>
            <div className="mt-4 font-bold text-[#2F6BFF]">
              — Jason M.
            </div>
            <div className="text-yellow-400 mt-1">★★★★★</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-gray-700">
              “Very professional and honest. Saved me from getting towed.”
            </p>
            <div className="mt-4 font-bold text-[#2F6BFF]">
              — Amanda R.
            </div>
            <div className="text-yellow-400 mt-1">★★★★★</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-gray-700">
              “Affordable and reliable. Definitely calling again if I need help.”
            </p>
            <div className="mt-4 font-bold text-[#2F6BFF]">
              — Chris T.
            </div>
            <div className="text-yellow-400 mt-1">★★★★★</div>
          </div>

        </div>
      </div>
    </section>
  );
}