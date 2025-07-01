import { useState } from "react";

export default function Movies({ movies }) {
    const [selectedGenre, setSelectedGenre] = useState("All");

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    }
    const filteredMovies = selectedGenre === "All" ? movies : movies.filter(movie => movie.genre === selectedGenre);
    return(
        <>
            <h2>Film Listesi</h2>
            <div className="filterColumn">
                <label htmlFor="genre">Film Türü</label> 
                <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romance">Romance</option>
                    <option value="Horror">Horror</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>

            <div className="cards">

                {filteredMovies.map((movie, i) => (
                    <div key={i} className="card">
                        <div className="cardTitle"><b>{movie.title}</b></div>
                        <div className="director"><span>Yönetmen : </span><b>{movie.director}</b></div>
                        <div className="actors"><span>Oyuncular : </span><b>{movie.actors.join(', ')}</b></div>
                        <div className="genre"><span>Film Türü : </span><b>{movie.genre}</b></div>
                    </div>
                ))}
            </div>
        </>
    )
}

//Filmlerin tamamını bas
//filtrelendirme ile filtre yap