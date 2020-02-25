import React from "react";

function Card() {
    return (
        <div className="card">
            <img class="card-img-top" src="./Images/HomePage.png" alt="Card image cap"></img>
            <div className="card-body">
                <a href="Projects/Project1/index.html" className="btn btn-primary">Social Ear Piece</a>
            </div>
        </div>
    );
}

export default Card;