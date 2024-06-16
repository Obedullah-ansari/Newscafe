import img1 from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";
import bg from "../../assets/bg-2.jpg";
import { Link } from "react-router-dom";
import styles from   "./Styles.module.css"
import {animate, motion, stagger} from  "framer-motion";
function Hero() {

  const text= " Welcome to newscafe, your go-to source for the latest and most engaging news for Indian youth. We bring you up-to-date headlines, insightful analysis, and inspiring stories, all with a sleek andmodern interface. Stay informed and entertained with diversecategories from politics to entertainment. Join us and discover how amazing staying informed can be! ";

  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.02 } },
  };

  const containerVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.02,
        staggerChildren: 0.02,
      },
    },
  }
  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  
  return (
    <>
      <div className={styles.container_ld}>
        <div className={styles.right_ct}>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="" />
            <div className={styles.dynamicimg}>
              <img src={bg} alt="" />
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.userbox}>
              <img
                style={{ width: "5rem", height: "5rem", borderRadius: "1rem" }}
                src="https://support.signal.org/hc/article_attachments/360083910451/animated-2.gif"
                alt=""
              />
              <p>
                500+
                <br /> user use Daily
              </p>
            </div>
            <motion.p
               variants={containerVariants}
               initial="initial"
               animate="animate"
            >
           
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterAnimation} >
                  {char}
                </motion.span>
              ))}
            
            </motion.p>
            <Link className={styles.herobtn}  to="/Newscafe/Newsbody">
              Read
            </Link>
          </div>
        </div>

        <div className={styles.left_ct}>
          <motion.div
           className={styles.text_new}
           variants={variants}
           initial="initial"
           animate="animate"
           >
            <motion.h5  variants={variants}>Real-Time Updates on Global Events</motion.h5>
            <motion.h1
              className={styles.h1m}
              variants={variants}
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                padding: "0.5%",
                color: "#1ABC9C",
              }}
            >
              Your Daily Source of Reliable News
            </motion.h1>
            <motion.h3
              className={styles.h3m}
              variants={variants}
              style={{ fontSize: "2rem", fontWeight: "600", padding: "1%" }}
            >
              Voice of the Indian Youth!
            </motion.h3>
          </motion.div>
          <div className={styles.imgcontainer_new}>
            <img src={img4} alt="" />
          </div>
          <Link  className={styles.btnnew} to="/Newscafe/Newsbody">
              Read
            </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
