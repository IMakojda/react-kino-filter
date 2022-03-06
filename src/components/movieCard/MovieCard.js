function Movie({movie}){
  const imgUrl="https://image.tmdb.org/t/p/w500"
  return(
    <div className="card-holder">
      <img src={imgUrl+movie.backdrop_path} alt={movie.overview}/>
        <div className="Movie-sign">
          <h2>{movie.title}</h2>
          <span>|</span>
          <p>{movie.release_date.slice(0,4)}</p>
        </div>
    </div>
  )
}

export default Movie;