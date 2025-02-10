import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css';
export  function PhotoViewer(props:{src: string | undefined}) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="mainphoto">               
            <img src ={props.src} />
            
        </div>
    );
}