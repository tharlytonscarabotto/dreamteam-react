import './TextInput.css'

const TextInput = (props) => {
    
    const placeholder = `Type the player's ${props.placeholder}`
    
    return (
        <div className='text-input'>
            <label>{props.label}</label>
            <input placeholder = {placeholder}/>
        </div>
    )
}

export default TextInput