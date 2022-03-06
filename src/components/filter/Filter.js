import { useEffect } from "react";
const axios = require('axios').default;


const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function getGenre() {
  const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const genreList = await axios.get(url);
  return genreList.data;
}



function Filter ({genres,popular,setFiltered,activeGenre,setActiveGenre}){
 useEffect(()=>{
  if(activeGenre===0){
    setFiltered(popular)
    return
  }
  const filtered=popular.filter((movies)=>movies.genre_ids.includes(activeGenre))
  setFiltered(filtered)
 },[activeGenre])
  return (
    <div className="filter-container">
      <button onClick={()=>setActiveGenre(0)}>All</button>,
      {genres.map(genr=>{
        return (<button key={genr.id} onClick={()=>setActiveGenre(genr.id)}>{genr.name}</button>)
      })}
    </div>
  )
}

export default Filter;