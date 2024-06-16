// import Newsboard from "./Newsboard"
import Navbar from "./Navbar"
// import { useState } from "react";
import Newsboard1 from "./Newsboarddummy";

function Newsmain() {
// const[category ,setCategory]= useState("general");
  return (
 <section className="landingpage_2">
   {/* <Navbar setCategory={setCategory} />
  <Newsboard1 category={category} /> */}
  <Navbar  />
  <Newsboard1 />
 </section>
  )
}

export default Newsmain
