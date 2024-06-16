import { useEffect, useState } from "react";
import Styles from "./Styles.module.css";
import Newscards from "./Newscards";
import{animate, motion} from "framer-motion"

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  
  return (
    <>
      <motion.div className={Styles.newscontent}
     
      >
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <Newscards
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <div className={Styles.loading}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
            Loading...
          </div>
        )}
      </motion.div>

    </>
  );
}

export default Newsboard;
