import React from "react";
import EmployDB from "../Images/ProjectPics/EmployeeDB.png";
import SocialEarPiece from "../Images/ProjectPics/SocialEarPiece.png";
import Druggler from "../Images/ProjectPics/Druggler.png";
import MovieMeme from "../Images/ProjectPics/Movie-Meme-Mash.png";
import WrkOut from "../Images/ProjectPics/WrkOutTrkrOFF.png";
import BdgtTrker from "../Images/ProjectPics/BudgetTrckrOFF.png";

function ProjectCard() {
    return (
        <div>
            <img src={EmployDB}></img>
            <img src={SocialEarPiece}></img>
            <img src={Druggler}></img>
            <img src={MovieMeme}></img>
            <img src={WrkOut}></img>
            <img src={BdgtTrker}></img>
        </div>
    )
}

export default ProjectCard