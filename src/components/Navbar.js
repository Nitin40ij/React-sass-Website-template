import React,{useState} from 'react'
import {BrowserRouter , Link } from 'react-router-dom'

const Navbar = () => {
    const [state,setState]=useState(false);
    React.useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[]);
 
    const handleScroll=()=>{
    if(window.scrollY > 120){
        setState(true)
    }
    else{
        setState(false);
    }
    }

  return (
      <BrowserRouter>
    <div className = {`navbar ${state ? 'whiteBg' :'transparent'}`} >
        <div className="container">
            <div className="navbar__content">
                <div className="navbar__left"><img src={state ? '/images/logo-dark.png' :'/images/logo-light.png'} alt="Logo" /></div>
                 <ul className="navbar__right">
                     <li>
                         <Link className='navbar__link' to="/">Home</Link>
                     </li>
                     <li>
                         <Link className='navbar__link' to="/showcases">Showcases</Link>
                     </li>
                     <li>
                         <Link className='navbar__link' to="/about">About</Link>
                     </li>
                     <li>
                         <Link className='navbar__link' to="/portfolio">PortFolio</Link>
                     </li>
                     <li>
                         <Link className='navbar__link' to="/contact">Contact</Link>
                     </li>
                 </ul>
            </div>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default Navbar