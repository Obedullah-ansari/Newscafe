import Newsboard from "./Newsboard"
import Navbar from "./Navbar"
import { useState } from "react";

function Newsmain() {
const[category ,setCategory]= useState("general");
  return (
 <section className="landingpage_2">
   <Navbar setCategory={setCategory} />
  <Newsboard category={category} />
 </section>
  )
}

export default Newsmain
