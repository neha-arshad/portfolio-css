import Image from "next/image";
import Navbar from "./Component/Navbar";
import Herosection from "./Component/Herosection";
import Aboutsection from "./Component/Aboutsection";
import Projectsection from "./Component/Projectsection";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";



export default function Home() {
  return (
		<main>

			<Navbar />
			<Herosection />
			<Aboutsection />
			<Projectsection />
			<Contact />
			<Footer />
			
		</main>
      );
}
