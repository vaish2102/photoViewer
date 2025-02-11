import {useState} from 'react'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import {ImageSelector} from './PhotoViewer/ImageSelector.tsx'
import './App.css'

function App() {
  const [selectedImageUrl,setSelectedImageUrl]= useState('https://picsum.photos/id/600/1600/900.jpg');
  return (
    <div>
      <PhotoViewer src={selectedImageUrl}/> 
      <ImageSelector handleClick={(url) =>setSelectedImageUrl(url)}/>
    </div>
  )
}
export default App
