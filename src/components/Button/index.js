import './Button.css'

const Button = (props) => {
    return(
        <button className='button'>
            {props.children}
        </button>
    )
}

export default Button

// .children = what's inside the button tag in the index form