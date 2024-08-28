import { useState } from "react";

export const BuscadorPelis = () => {

  // variables url y consumo de api
  const url = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "Introduce tu api Key"
  //estado de búsqueda y movies
  const [inputSearch, setInputSearch] = useState("");
  const [movies, setMovies] = useState([]);

  // Cambios del buscador
  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
    
  };

  // envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputSearch == '') return
    getMovies();
  };

  //reset de búsqueda
  const resetSearch = () => {
    setMovies([])
    setInputSearch('')
  }


  //llamada a pa API
  const getMovies = async () => {
    try {
      const response = await fetch(`${url}?query=${inputSearch}&api_key=${API_KEY}`);
      const data = await response.json();
      //console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };


  return (
    <section className="container">
      <h1 className="title">Buscador de Películas</h1>
      <h5 className="txt">Introduce el nombre de una película</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Película"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn search-btn">Buscar</button>
        <button type="submit" className="btn reset-btn" onClick={resetSearch}>Reset</button>
        
      </form>

      <div className="movie-list">
        {movies.map((item) => ( 
          <div key={item.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}/>
            <h2>{item.title}</h2>
            <h5 className="sutitle">Sinopsis</h5>
            <p>{item.overview}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
