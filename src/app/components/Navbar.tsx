export default function Navbar() {
    return (
        <main classname="snap-y snap mandatory h-screen overflow-y-scroll">
            <nav className="bg-black text-white p-5">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">Edwards Plastering</div>
                    <div className="space-x-6">
                        <a href="#services" className="hover:underline">Services</a> {/* Smooth scroll to Services */}
                        <a href="/gallery" className="hover:underline">Gallery</a>
                        <a href="/reviews" className="hover:underline">Reviews</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </div>
                </div>
            </nav>
        </main>
    );
}