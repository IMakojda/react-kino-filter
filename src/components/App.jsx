import '../components/App.css'
import { useEffect,useState } from 'react';
import ApiPopular from './apiSercice/ApiService';
import Movie from './movieCard/MovieCard';
import Filter from './filter/Filter';
import getGenre from './apiSercice/ApiGenre';
import { motion,AnimatePresence } from "framer-motion";

function App(){
  const [popular,setPopular]=useState([]);
  const [filtered, setFiltered]=useState([]);
  const [genres, setGenres]=useState([]);
  const [activeGenre, setActiveGenre]=useState(0)

  useEffect(()=>{
    getGenre()
    .then(r=>{
      setGenres(r.genres)
    })
    ApiPopular()
    .then(r=>{
      setPopular(r.results)
      setFiltered(r.results)
    })
    
  },[])

  return (
    <div>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} genres={genres} setActiveGenre={setActiveGenre}/>
      <motion.div layout className="popular-movies" >
        <AnimatePresence>
        {filtered.map(movie=>{
          return <Movie key={movie.id} movie={movie}/>
          })
        }
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;