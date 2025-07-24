import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Josh’s Plastering</h1>
        <p className="text-lg max-w-xl">
          Quality plastering services you can trust.
        </p>
      </main>
    </>
  )
}