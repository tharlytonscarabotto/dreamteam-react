import './TextInput.css'

const TextInput = (props) => {

    const onType = (event) => {
        props.afterChanged(event.target.value)
    }
    
    const placeholder = `Type the player's ${props.placeholder}`
    
    return (
        <div className='text-input'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.required} placeholder = {placeholder}/>
        </div>
    )
}

export default TextInput