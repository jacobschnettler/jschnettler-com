export function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/mrejdlep"
            method="POST"
            className="space-y-3"
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border rounded-md px-4 py-2"
                required
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full border rounded-md px-4 py-2"
                required
            />

            <textarea
                name="message"
                placeholder="What’s wrong with your vehicle?"
                className="w-full border rounded-md px-4 py-2 h-28"
                required
            />

            <button
                type="submit"
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-md font-bold hover:bg-gray-800 cursor-pointer"
            >
                Submit Info (We’ll Call You)
            </button>
        </form>
    );
}