import './PlayerCard.css'

const PlayerCard = (props) => {
    return(
        <div className='player-card'>
            <div className='header'>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.team}</h5> 
                <h5>{props.country}</h5>
            </div>
        </div>
    )
}

export default PlayerCard