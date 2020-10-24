import React, { useCallback, useState } from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfoContainer from './components/MissionInfo';
import spacex from './spacex.png'


function App() {
  const [id, setId] = useState(42)
  const handleIdChange = useCallback(
    newId => {
      setId(newId)
    }, []
  );



  return (
    
    <div>
      <img src={spacex} alt="SpaceX logo" className='spacexlogo'   />

    <div className="App-contianer">
      <MissionContainer  handleIdChange={handleIdChange} />
      <MissionInfoContainer id={id} />



    </div>
    </div>
  );
}

export default App;
