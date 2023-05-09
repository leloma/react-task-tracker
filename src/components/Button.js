import PropTypes from 'prop-types'


const Button = ({text, bgcolor, onClick}) => {
  return (
    <button 
        className='btn' 
        style={{backgroundColor: bgcolor}} 
        onClick = {onClick} >
            {text}
    </button>
    )
}

Button.defaultProps = {
    color : "black",
    text : "Add",
}

Button.propTypes = {
    text : PropTypes.string,
    bgcolor : PropTypes.string,
    onClick : PropTypes.func,

}


export default Button
