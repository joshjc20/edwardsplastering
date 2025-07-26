

export default function Services() {
    return (
        <section id="services" className="py-16 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Service 1 */}
                    <div className="shadow-md p-8 rounded-lg border border-gray-100">
                        <h3 className="text-blue-600 text-2xl font-bold mb-2">Skimming</h3>
                        <p className="text-lg font-semibold mb-1">Smooth Finish</p>
                        <p className="text-gray-600">A flawless skim coat for walls and ceilings, perfect for painting or decorating.</p>
                    </div>

                    {/* Service 2 */}
                    <div className="shadow-md p-8 rounded-lg border border-gray-100">
                        <h3 className="text-blue-600 text-2xl font-bold mb-2">Rendering</h3>
                        <p className="text-lg font-semibold mb-1">Exterior Protection</p>
                        <p className="text-gray-600">A strong, weather-resistant coating to protect and style exterior walls.</p>
                    </div>

                    {/* Service 3 */}
                    <div className="shadow-md p-8 rounded-lg border border-gray-100">
                        <h3 className="text-blue-600 text-2xl font-bold mb-2">Dry Lining</h3>
                        <p className="text-lg font-semibold mb-1">Quick Interior Finish</p>
                        <p className="text-gray-600">Speedy and clean plasterboard installation for internal walls and ceilings.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
