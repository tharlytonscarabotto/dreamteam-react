import Button from '../Button'
import DropDownList from '../DropDownList'
import TextInput from '../TextInput'
import './Form.css'

const Form = () => {

    const positions = [
        'GK',
        'RB',
        'CB',
        'LB',
        'CM',
        'RW',
        'ST',
        'LW'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Form foi ok")
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill the information to put a player on your Dream Team</h2>
                <TextInput required={true} label="Name" placeholder="name" />
                <TextInput required={true} label="Team" placeholder="current team" />
                <TextInput required={true} label="Country" placeholder="nationality" />
                <TextInput label="Image" placeholder="image address" />
                <DropDownList required={true} label="Position" position={positions}/>
                <Button>
                    Add Player
                </Button>
            </form>
        </section>
    )
}

export default Form