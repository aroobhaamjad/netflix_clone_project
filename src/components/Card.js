import React from "react";
import '../components/Card.css'
import {FaPlayCircle, FaThumbsUp, FaThumbsDown, FaPlus} from "react-icons/fa"

const Card = ({ data, isActive }) => {
    const { title, time, genre, image } = data;
  
    return(
        <div className={`card${isActive ? " active" : ""} w-[150px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300`}>
            <div className="card-image" ></div>
            <div className="card-content">
                <p className="title">{title}</p>
                <p className="time">{time}</p>
                <p className="genre">{genre}</p>
            </div>
            <div className="card-buttons">
                <button className="btn"><FaPlayCircle/></button>
                <button className="btn"><FaThumbsUp/></button>
                <button className="btn"><FaThumbsDown/></button>
                <button className="btn"><FaPlus/></button>
            </div>
        </div>
    );
}

export default Card;