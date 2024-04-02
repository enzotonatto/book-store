import logo from '../../imagens/logo.svg'
import './style.css'

function Logo() {
    return (
        <div className='logo'>
        <img 
            src={logo} 
            alt='logo'
            className='logo-img'
        ></img>
        <p><strong>Books</strong>Store</p>
      </div>
    )
}

export default Logo;