import React from "react";
import Navbar from "../components/Navbar";
import home from "../netflixappimgs/home.jpg"
import homeTitle from "../netflixappimgs/homeTitle.webp"
import {FaPlay, FaInfoCircle} from "react-icons/fa"
import "../pages/Netflix.css"
import Slider from "../components/Slider";
import Card from "../components/Card";

function Netflix({cardData}){

    return (
        <div>
            <Navbar />
            <div className="mainshow">
                <div className="img">
                    <img src={home} alt="Wednesday" className="mainbg"></img>
                </div>
                <div className="title">
                    <img src={homeTitle} alt="Wednesday" className="maintitle"></img>
                    <div className="subtitle"> 
                        <button className="play"><FaPlay/></button>
                        <button className="moreinfo"><FaInfoCircle/></button>
                    </div>
                </div>
            </div>
            <div>
                <h4>Recommended</h4>
                <Slider/>
            </div>
            <div>
                <h4>Movies</h4>
                <Slider/>
            </div>
            <div>
                <h4>TV Shows</h4>
                <Slider/>
            </div>
        </div>
    );
}

export default Netflix;