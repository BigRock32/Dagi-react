import st from './navbar.module.scss'

import { services } from '../../helpers/servicesList'
import ServicesLink from '../services-link/SevicesLink'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
   const activeLink = 'header__link header__link_active'
   const normalLink = 'header__link'

   return (
      <div className={st.nav}>
         <ul className={st.nav__list}>
            <li>
               <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                  Главная
               </NavLink>
            </li>
            <li>
               <div className={st.linkWrap}>
                  <a href="#" className={`${st.nav__link} ${st._yellowLink}`}>Услуги</a>
                  <svg className={st.linkSvg} width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 1L5.61589 6.53907C5.81579 6.77895 6.18421 6.77894 6.38411 6.53907L11 1" strokeWidth="2" strokeLinecap="round" />
                  </svg>
               </div>
               <ul className={st.nav__subList}>
                  <div className={st.listWrap}>
                     {services.map((service, index) => {
                        return <ServicesLink index={index} title={service.title} />
                     })}
                  </div>
               </ul>
            </li>
            <li>
               <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
                  Проекты
               </NavLink>
            </li>
            <li>
               <NavLink to='/contacts' className={({ isActive }) => isActive ? activeLink : normalLink}>
                  Конткаты
               </NavLink>
            </li>
         </ul>
      </div>
   );
}

export default Navbar;