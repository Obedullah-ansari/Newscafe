
import Hero from "./Components/Hero/Hero.jsx";
import Heronav from "./Components/Hero/Heronav.jsx";
import Services from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
function Allmain() {
  return (
   <>
    <>
     <section id="hero" >
     <Heronav/>
     <Hero/>
     </section>

     <section id="services" >
      <Services/>
     </section>
     <section id="contact">
      <Contact/>
     </section>
   
    </>
   </>
  )
}

export default Allmain
