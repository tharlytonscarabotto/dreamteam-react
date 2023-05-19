import './FieldPositions.css'

const FieldPositions = (props)=>{
    return(
        <section className='field-positions' style={{backgroundColor: props.backgroundColor}}>
            <h3 style={{borderColor: props.cardColor}}>{props.position}</h3>
        </section>
    )   
}

export default FieldPositions