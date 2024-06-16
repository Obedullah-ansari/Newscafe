import Styles from "./Styles.module.css";
import Newscards from "./Newscards.jsx";
import { motion } from "framer-motion";
import { articles } from "./data.js";
function Newsboarddummy() {
  return (
    <>
      <motion.div className={Styles.newscontent}>
        {articles.map((news, index) => (
          <Newscards
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
        <p className={Styles.note}>
          Note: As @newsapi is not free for production, only a
          limited amount of data is available.
        </p>
      </motion.div>
    </>
  );
}

export default Newsboarddummy;
