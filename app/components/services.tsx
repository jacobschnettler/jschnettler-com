export function Services() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Reliable mobile mechanic services delivered right to your location.
        </p>

        {/* Services box */}
        <div className="mt-12 bg-gray-50 border rounded-xl p-8 shadow-sm">

          <ul className="space-y-4 text-gray-700 text-lg">

            <li className="flex items-start gap-2">
              <span className="text-[#2F6BFF] font-bold">•</span>
              Engine diagnostics & troubleshooting
            </li>

            <li className="flex items-start gap-2">
              <span className="text-[#2F6BFF] font-bold">•</span>
              Brake repair & replacement
            </li>

            <li className="flex items-start gap-2">
              <span className="text-[#2F6BFF] font-bold">•</span>
              Battery jump starts & replacement
            </li>

            <li className="flex items-start gap-2">
              <span className="text-[#2F6BFF] font-bold">•</span>
              Oil changes & fluid checks
            </li>

            <li className="flex items-start gap-2">
              <span className="text-[#2F6BFF] font-bold">•</span>
              Roadside emergency assistance
            </li>

            <li className="flex items-start gap-2">
              <span className="text-[#2F6BFF] font-bold">•</span>
              Suspension & basic repairs
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}