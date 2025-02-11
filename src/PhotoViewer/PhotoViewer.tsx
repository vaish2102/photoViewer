import './PhotoViewer.css';
export  function PhotoViewer(props:{src: string}) {
    return (                
        <div className="mainphoto">
             <p className='TextInstruction'> React Photo Viewer</p>               
            <img className="selectedImage" src ={props.src} />  
        </div>
    );
}