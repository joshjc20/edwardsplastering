export default function Hero() {
    return (
        <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/dude.jpeg')" }}>
            <div className="absolute inset-0 bg-black/50" />

            {/* FIX: Add h-screen here so this div has full height to center inside it */}
            <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Plastering in Stockport</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">Precise, reliable, durable</p>
                <a
                    href="/contact"
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                >
                    Enquire now
                </a>
            </div>
        </section>
    )
}