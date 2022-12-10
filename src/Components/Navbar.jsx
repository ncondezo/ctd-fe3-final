import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {Theme, handleThemeChange}=useContext(ContextGlobal)

  return (
    <nav>
      <Link to={'/'}><h2>DH Odonto</h2></Link>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contacto</Link>
                <Link to={'/favorites'}>Favoritos</Link>
                <button className={`themeButton ${Theme.color === 'white' && 'darkBtn'}`}/*className={(Theme.color === 'black') ? "fa-solid fa-moon" : "fa-solid fa-sun"}*/ onClick={handleThemeChange} /*style={{width: "30px", height: "30px"}}*/>{Theme.themeButtonIcon}</button>
            </div>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar