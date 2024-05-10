
import Banner from "./components/Banner/Banner"
import ContactForm from "./components/ContactForm/ContactForm"

import Dishes from "./components/Dishes/Dishes"
import Footer from "./components/Footer/Footer"

import Navbar from "./components/Navbar/Navbar"
import Review from "./components/Reviews/Review"



function App() {

  return (
    <>
    <Navbar />
    <Banner /><br />
   <Dishes />
   <Review />
   <ContactForm />
   <br />
   <Footer />
    </>
  )
}

export default App
