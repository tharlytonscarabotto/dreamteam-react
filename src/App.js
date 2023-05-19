import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import FieldPositions from './components/FieldPositions';

function App() {

  const fieldPositions = [
    {
      name:'Goalkeeper',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
    {
      name:'Defenders',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name:'Midfielders',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Forwards',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    }
  ]

  const [players, setPlayers] = useState([])

  const newPlayerAdded = (player)=>{
    console.log(player)
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner />
      <Form positions={fieldPositions.map(position => position.name)} playerInserted={player => newPlayerAdded(player)}/>

      {fieldPositions.map(position => <FieldPositions key={position.name} position={position.name} backgroundColor={position.secondaryColor} cardColor={position.primaryColor}/>)}

    </div>
  );
}

export default App;
