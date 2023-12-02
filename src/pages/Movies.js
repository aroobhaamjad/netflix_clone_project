import React, {useState} from "react";
import "../pages/Movies.css"
import cardData from "../components/cardData"
import Card from "../components/Card"
import Navbar from "../components/Navbar";

function Movies(){
    const [selectedGenre, setSelectedGenre] = useState("All");
    
    const filteredMovies = cardData
    .filter((movie) => movie.type === "movie")
    .filter(
        (movie) => selectedGenre === "All" || movie.genre === selectedGenre
    );

    const uniqueGenres = [...new Set(cardData.map((movie) => movie.genre))];

    return (
    <div>
        <Navbar />
        <h1>Movies</h1>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All Genres</option>
            {uniqueGenres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
        <div className="movies-container">
            {filteredMovies.map((movie, index) => (
                <Card key={index} data={movie} isActive={false} />
            ))}
        </div>
    </div>
  );
}

export default Movies;