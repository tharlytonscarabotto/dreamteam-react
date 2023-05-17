import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.position.map(position => {
                    return <option key={position}>{position}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList