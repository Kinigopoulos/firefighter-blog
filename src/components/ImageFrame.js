import React from "react";

function ImageFrame(props){
    return(
        <div className="imageFrameContainer">
            <img src={props.image} alt={props.alt}/>
        </div>
    )
}

export default ImageFrame;