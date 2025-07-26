import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from "./components/Services"; // adjust path if needed

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}