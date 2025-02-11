import './PhotoViewer.css';
export  function PhotoViewer(props:{src: string | ""}) {   
    return (                
        <div className="mainphotoframe">               
            <img className="selectedImage" src ={props.src} />
        </div>
    );
}