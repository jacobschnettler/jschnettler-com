import { ContactForm } from "../components";

export default function BookServicePage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-sm border p-8 text-center">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Book a Service
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          Fast mobile mechanic service. The quickest way to reach us is by phone.
          Call anytime for immediate help or scheduling.
        </p>

        {/* Phone number */}
        <div className="mt-6">
          <a
            href="tel:2727720082"
            className="text-2xl font-bold text-[#2F6BFF] hover:underline"
          >
            (272) 772-0082
          </a>
        </div>

        {/* CTA button */}
        <div className="mt-6">
          <a
            href="tel:2727720082"
            className="inline-block bg-[#2F6BFF] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600"
          >
            Call Now
          </a>
        </div>

        {/* Optional simple form (no pressure booking) */}
        <div className="mt-10 text-left">
          <p className="text-sm text-gray-500 mb-3">
            (Optional) Leave details so we can prepare before calling you:
          </p>

          <ContactForm />
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-gray-500">
          Mobile service • Scranton, PA • Fast response times
        </p>
      </div>
    </section>
  );
}