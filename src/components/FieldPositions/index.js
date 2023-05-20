import PlayerCard from '../PlayerCard'
import './FieldPositions.css'

const FieldPositions = (props)=>{
    return(
        <section className='field-positions' style={{backgroundColor: props.backgroundColor}}>
            <h3 style={{borderColor: props.cardColor}}>{props.position}</h3>
            <div className='player-card'>
                {props.players.map(player => <PlayerCard name={player.name} team={player.team} country={player.country} image={player.image}/>)}
            </div>
        </section>
    )   
}

export default FieldPositions