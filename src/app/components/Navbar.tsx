export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Josh’s Plastering</div>
                <div className="space-x-6">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/services" className="hover:underline">Services</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    );
}