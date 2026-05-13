export function Footer() {
  return (
    <footer className="bg-[#2F6BFF] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-bold">Schnettler LLC</h2>
          <p className="mt-2 text-sm text-white-400">
            Fast, dependable service when you need it most. We bring repairs directly to you.
          </p>

          <p className="text-sm text-white/70 mt-2">
            Fully insured mobile mechanic service
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/#services" className="hover:text-white">Services</a></li>
            <li><a href="/#about" className="hover:text-white">About</a></li>
            <li><a href="/book-service" className="hover:text-white">Book Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <p className="text-sm">Email: jacobschnettler12@gmail.com</p>
          <p className="text-sm">Phone: (272) 772-0082</p>
          <p className="text-sm mt-2">Scranton, PA</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white-800 text-center py-4 text-sm text-white-500">
        © {new Date().getFullYear()} Schnettler LLC. All rights reserved.
      </div>
    </footer>
  );
}