
import React, {useState} from 'react'
import '../styles/index.css'
import '../styles/NavBar.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color,setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);
  return (
    <div className={color ? 'header header-bg' :'header'}>
      <Link to='/'>
        <h1 className='logo'>DoscoD</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Me</Link>
          </li>
        <li>
          <Link to='/project'>My Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Me</Link>
        </li>
      </ul>
      <div className='hambuger' onClick={handleClick}>
        {click ?<FaTimes size={20} style={{color:'#fff'}}/>: <FaBars size={20} style={{color:'#fff'}}/>}
      </div>
    </div>
  )
}

export default NavBar
