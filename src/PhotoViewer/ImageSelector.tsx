import React from "react"; 
import { useState } from 'react'
import './ImageSelector.css';
 

const brokenImages = [ 1, 24, 32, 36, 44, 47];
function getImageUrls() {
    const urls = [];
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    return urls;
}

export const imageUrls = getImageUrls();  

export function ImageSelector(onChange:any) {  
    return ( 
        <div className="thumbnailDiv">
            {
            imageUrls.map((url) => <div> <img className="thumbnailImage" src={url} onClick={onChange(url)}/> </div>)
            }
        </div>
        
    );
}







