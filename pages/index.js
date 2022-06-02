import { Footer } from "../components/Footer";
import Main from "../components/Main";
import { Navbar } from "../components/Navbar";
import January from "../components/January";
import Grid from "@mui/material/Grid";
import Jancard from "../components/Jancard";
import { Container } from '@mui/material';




export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <January />

     

      
      <Footer />
    </div>
  )
}

