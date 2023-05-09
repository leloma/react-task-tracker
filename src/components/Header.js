import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, propShowAdd}) => {

    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button bgcolor={propShowAdd? 'red' : 'green'} text = {propShowAdd? 'Close' : 'Add'} onClick = {onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title : "Task Tracker",
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header
