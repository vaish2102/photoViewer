import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {PhotoViewer} from './PhotoViewer/PhotoViewer.tsx'
import { ImageSelector } from './PhotoViewer/ImageSelector.tsx'
import './App.css'


function App() {
  const [selectedImageUrl,setSelectedImageUrl]= useState('https://picsum.photos/id/29/500/500');
 
  return (
    <div>
      <h1> React Photo Viewer </h1>
      <PhotoViewer src={selectedImageUrl}/> 
      <ImageSelector handleClick={(url) =>setSelectedImageUrl(url)}/>
    </div>
  )
}

export default App
