import { useState } from 'react'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import { ImageSelector } from './PhotoViewer/ImageSelector.tsx'
import './App.css'

function App() {
  const [selectedImageUrl,setSelectedImageUrl]= useState('https://picsum.photos/id/29/800/800');
  return (
    <div>
      <h1> React Photo Viewer </h1>
      <PhotoViewer src={selectedImageUrl}/> 
      <p className='TextInstruction'> Select your photo</p>
      <ImageSelector handleClick={(url) =>setSelectedImageUrl(url)}/>
    </div>
  )
}
export default App
