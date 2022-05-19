import React from 'react'
import {BrowserRouter,Link} from 'react-router-dom'

const Header = () => {
  const [state]=React.useState({heading:'About Us' , link1:'Home' ,link2:'About Us'})
  return (
    <>
     <BrowserRouter>
    <div className='header'>
         <div className="header__content">
           <h1 className='header__content-h1'>{state.heading}</h1>
           <div className="header__content-links">
             <Link className='header__content-links' to="/">{state.link1}</Link>
             <span className='header__content-span'></span>
             <Link className='header__content-links' to="/about us">{state.link2}</Link>
           </div>
         </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default Header