import React from "react";
import Card from "../components/Card";
import "./MyList.css";
import Navbar from "../components/Navbar";

function MyList({ cardData }) {
  const myListData = cardData.filter((card) => card.addToList);

  return (
    <div>
        <Navbar/>
        <div className="main">
            <h2>My List</h2>
            <div className="my-list-container">
                {myListData.map((card, index) => (
                    <Card key={index} data={card} isActive={false} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default MyList;
