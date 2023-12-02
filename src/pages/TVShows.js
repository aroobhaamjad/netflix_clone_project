import React, {useState} from "react";
import "../pages/TVShows.css"
import cardData from "../components/cardData"
import Card from "../components/Card"
import Navbar from "../components/Navbar";

function TVShows(){
    const [selectedGenre, setSelectedGenre] = useState("All");
    
    const filteredTVShows = cardData
    .filter((tvshow) => tvshow.type === "tvshow")
    .filter(
        (tvshow) => selectedGenre === "All" || tvshow.genre === selectedGenre
      );

    const uniqueGenres = [...new Set(cardData.map((tvshow) => tvshow.genre))];

    return (
    <div>
        <Navbar />
        <h1>TV Shows</h1>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All Genres</option>
            {uniqueGenres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
        <div className="tvshow-container">
            {filteredTVShows.map((tvshow, index) => (
                <Card key={index} data={tvshow} isActive={false} />
            ))}
        </div>
    </div>
  );
}

export default TVShows;