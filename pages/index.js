import { Footer } from "../components/Footer";
import Main from "../components/Main";
import { Navbar } from "../components/Navbar";
import Wordpress from "../components/Wordpress";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Wordpress />
      <Footer />
    </div>
  )
}
