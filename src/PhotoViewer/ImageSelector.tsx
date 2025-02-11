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

interface ImageSelectorProps {
    handleClick:(newValue:string)=> void;
}
export const imageUrls = getImageUrls();  

export function ImageSelector({handleClick}:ImageSelectorProps) {  
    return ( 
        <>
            <div className="imageSelector">
                {
                 imageUrls.map((url,index) => <div key={index}> <img className="thumbnailImage" src={url} onClick={(event)=>handleClick(event.target.src)} /></div>)
                }
            </div>
        
        </>
        
    );
}







