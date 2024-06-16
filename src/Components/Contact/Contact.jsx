
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import location from "../../assets/location.png";
import instagram from "../../assets/instagram.png";
import gamil from "../../assets/gmail.png";
import telephone from "../../assets/telephone.png";
import { useMediaQuery } from "@react-hook/media-query";
import Listitem from "./Listitem";

const itemsdata= [
    { 
      id:1,
      img : location,
      des : "New Delhi,Sector 15 ,Rohini,"
    },
    { 
      id:2,
      img : instagram,
      des : "Newscafe@8252"
    },
    { 
      id:3,
      img : gamil,
      des : "newscafe346@gmail.com"
    },
    { 
      id:4,
      img : telephone,
      des : "+919616833523"
    },
  ]


function Contact() {
  const [emailvalid, setemailisvalid] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  function handelform(event) {
    const fd = new FormData(event.target);
    const emailvalid = fd.get("email");
    if (emailvalid.trim() === "" && !emailvalid.includes("@")) {
      event.preventDefault();
      setemailisvalid(true);
    }
  }

  function handelchange() {
    setemailisvalid(false);
  }

  return (
    <>
      <div className={styles.container}>
        
        <div className={styles.robo}>
        <h1 className={styles.heading}>contact us</h1>
          <motion.span className={styles.uderline}
          initial={{width :0 }}
          whileInView={{ width: isSmallScreen ? 300 : 600 , transition :{duration: 1}} }
          ></motion.span>
          <div className={styles.minirobot} >
            
            {itemsdata.map((items)=>(
              <Listitem key={items.id} img ={items.img} des={items.des}   />
            ))}
          </div>
        </div>

        <motion.div className={styles.Contact}
        >
            
          <form
            onSubmit={handelform}
            action="https://api.web3forms.com/submit"
            method="POST"
            className={styles.contactbio}
          >
            <h2> Send a message to me </h2>
            <input
              type="hidden"
              name="access_key"
              value="d65015d1-40f0-453a-b7e5-3ca658ba0eca"
            />

            <motion.input type="text" name="username" placeholder="Firstname" 
             initial={{x :-100, opacity :0}}
             whileInView={{x:0, opacity :1 , transition :{duration :0.7}}}
            
            />

            <motion.input type="text" name="userlastname" placeholder="Last name"
             initial={{x :100, opacity :0}}
             whileInView={{x:0, opacity :1 , transition :{duration :0.7}}}
            />

            <motion.input
              type="Email"
              name="email"
              placeholder="Email"
              onChange={handelchange}
              initial={{x :-100, opacity :0}}
              whileInView={{x:0, opacity :1 , transition :{duration :0.7}}}
            />
            {emailvalid && <p className={styles.error}>Email is required</p>}

            <motion.textarea
             initial={{x :100, opacity :0}}
             whileInView={{x:0, opacity :1 , transition :{duration :0.7}}}
              name="Leave a message"
              cols="10"
              rows="8"
              placeholder="Leave a message"
            ></motion.textarea>
            <button className={styles.submtbtn}>send</button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
