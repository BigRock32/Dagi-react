import logo from './../../media/logo.svg'


import { NavLink } from 'react-router-dom'

// console.log(services.index);

import "./header.scss"
import Navbar from '../navbar/Navbar'

const Header = (props) => {
   const activeLink = 'header__link header__link_active'
   const normalLink = 'header__link'

   return (
      <>
         <header className={props.fixed ? `header _fixed` : `header`}>
            <div className="header__row">
               <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                  <img src={logo} alt="" />
               </NavLink>

               <Navbar />
               
               <div className="header__btns">
                  {/* <a href="" className="header__btn btn-lang">En</a> */}
                  <a href='' className="header__btn btn-yellow" onClick={props.openModal}>Связаться с нами</a>
               </div>
               <div className={props.nav ? `burger _active` : `burger`} onClick={props.setNav}>
                  <span></span>
               </div>
            </div>
         </header>

         
      </>
   );
}

export default Header;