export default function Hero() {
    return (
        <section className="relative bg-cover bg-center h-[500px] text-white" style={{ backgroundImage: "url('/plastering.jpeg')" }}>
            <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Plastering Services</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                    Reliable, high-quality plastering for homes and businesses. Serving your local area with pride.
                </p>
                <a
                    href="/contact"
                    className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                >
                    Get a Quote
                </a>
            </div>
        </section>
    )
}