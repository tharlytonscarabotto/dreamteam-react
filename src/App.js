import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import FieldPositions from './components/FieldPositions';
import './App.css';

function App() {

  const fieldPositions = [
    {
      name: 'Goalkeeper',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
    {
      name: 'Defenders',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Midfielders',
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

  const newPlayerAdded = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner />
      <div className='content'>
        <Form positions={fieldPositions.map(position => position.name)} playerInserted={player => newPlayerAdded(player)} />

        {fieldPositions.map(position => <FieldPositions
          key={position.name}
          position={position.name}
          backgroundColor={position.secondaryColor}
          cardColor={position.primaryColor}
          players={players.filter(player => player.position === position.name)}
        />)}

      </div>
    </div>
  );
}

export default App;
