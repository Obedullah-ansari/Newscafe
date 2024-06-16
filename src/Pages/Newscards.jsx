import Styles from "./Styles.module.css";
import defaultimg from "../assets/default.webp";
import { motion ,useAnimation} from "framer-motion";

function Newscards({ variants, title, description, src, url }) {

  return (
    <motion.div className={Styles.cardcontainer} 
    initial={{ scale: 1 }}
    whileHover={{
      scale: 1.05,
    }}

    >
      <div className={Styles.highlght} > 
      <motion.div className={Styles.imgcontainer}>
        <motion.img src={src ? src : defaultimg} alt="" 
     
        
        />
      </motion.div>
  
      <motion.div className={Styles.texconatiner}>
        <div style={{height :"70%"}}>
          <h6> {title} </h6>
          <p>
            {description
              ? `${description.slice(0, 150)}...`
              : " Rright now we are not able to fetch the description if you want to read more please click below "}
          </p>
        </div>
        <a className={Styles.herobtn} href={url}>
          Read More
        </a>
      </motion.div>
        
         </div>
   
    
    </motion.div>
  );
}

export default Newscards;
