
import styles from "./Contact.module.css";

function Listitem( {img, des}) {
 
     
    
  return (
    <>
      <li>
        <img src={img} />
        <p className={styles.textpara}>
          {des}
        </p>
      </li>
    </>
  );
}

export default Listitem;
