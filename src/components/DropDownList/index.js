import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={event => props.afterChanged(event.target.value)} required={props.required} value={props.value}>
                {props.position.map(position => {
                    return <option key={position}>{position}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList