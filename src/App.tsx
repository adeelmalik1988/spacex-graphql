import React, { useCallback, useState } from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfoContainer from './components/MissionInfo';


function App() {
  const [id, setId] = useState(42)
  const handleIdChange = useCallback(
    newId => {
      setId(newId)
    }, []
  );



  return (
    <div className="App-contianer">
      <MissionContainer  handleIdChange={handleIdChange} />
      <MissionInfoContainer id={id} />



    </div>
  );
}

export default App;
