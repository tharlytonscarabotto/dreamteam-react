import TextInput from '../TextInput'
import './Form.css'

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Fill the information to put a player on your Dream Team</h2>
                <TextInput label="Name" placeholder="name" />
                <TextInput label="Team" placeholder="current team" />
                <TextInput label="Country" placeholder="nationality" />
                <TextInput label="Image" placeholder="image address" />
            </form>
        </section>
    )
}

export default Form