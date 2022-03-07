import { motion } from "framer-motion";

function Movie({movie}){
  const imgUrl="https://image.tmdb.org/t/p/w500"
  return(
    <motion.div layout
    animate={{opacity:1, scale:1}}
    initial={{opacity:0, scale:0}}
    exit={{opacity:0, scale:0}}
    transition={{duration:0.4}}
    className="card-holder">
      <img src={imgUrl+movie.backdrop_path} alt={movie.overview}/>
        <div className="Movie-sign">
          <h2>{movie.title}</h2>
          <span>|</span>
          <p>{movie.release_date.slice(0,4)}</p>
        </div>
    </motion.div>
  )
}

export default Movie;