import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import TextInput from '../TextInput'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [team, setTeam] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [position, setPosition] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.playerInserted({
            name,
            team,
            country,
            image,
            position
        })
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill the information to put a player on your Dream Team</h2>
                <TextInput 
                    required={true} 
                    label="Name" 
                    placeholder="name" 
                    value={name}
                    afterChanged={value => setName(value)}
                />
                <TextInput 
                    required={true} 
                    label="Team" 
                    placeholder="current team" 
                    value={team}
                    afterChanged={value => setTeam(value)}
                />
                <TextInput 
                    required={true} 
                    label="Country" 
                    placeholder="nationality"
                    value={country}
                    afterChanged={value => setCountry(value)} 
                />
                <TextInput 
                    label="Image" 
                    placeholder="image address" 
                    value={image}
                    afterChanged={value => setImage(value)}
                />
                <DropDownList 
                    required={true} 
                    label="Position" 
                    position={props.positions}
                    value={position}
                    afterChanged={value => setPosition(value)}
                />
                <Button>
                    Add Player
                </Button>
            </form>
        </section>
    )
}

export default Form