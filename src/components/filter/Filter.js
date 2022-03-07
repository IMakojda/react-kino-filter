import { useEffect } from "react";
import ApiSearchByIds from "components/apiSercice/ApiSearchByIds";

function Filter ({genres,popular,setFiltered,activeGenre,setActiveGenre}){
 useEffect(()=>{
  if(activeGenre===0){
    setFiltered(popular)
    return
  }
  
  ApiSearchByIds(activeGenre)
  .then(r=>setFiltered(r.results))
  
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