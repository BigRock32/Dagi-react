import logo from './../../media/logo.svg'
import whatsapp from './../../media/whatsapp.svg'
import tg from './../../media/telegram.svg'

import { NavLink } from 'react-router-dom'
import { services } from '../../helpers/servicesList'

// console.log(services.index);

import "./header.scss"
import ServicesLink from '../services-link/SevicesLink'


const Header = (props) => {
   const activeLink = 'header__link header__link_active'
   const normalLink = 'header__link'

   return (
      <>
         <header className="header">
            <div className="header__row">
               <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                  <img src={logo} alt="" />
               </NavLink>
               <div className="header__nav">
                  <ul className="header__nav-list">
                     <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                           Главная
                        </NavLink>
                     </li>
                     <li>
                        <div className="link-wrap">
                           <a dataGoto=".services" href="#" className="header__link _yellow-link">Услуги</a>
                           <svg className="link-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5.61589 6.53907C5.81579 6.77895 6.18421 6.77894 6.38411 6.53907L11 1" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        </div>
                        <ul className="header__sub-nav-list">
                           <div className="nav-list-wrap">
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
               <div className="header__btns">
                  <a href="" className="header__btn btn-lang">En</a>
                  <a href='' className="header__btn btn-yellow" onClick={props.openModal}>Заказать звонок</a>
               </div>
               <div className="burger">
                  <span></span>
               </div>
            </div>
         </header>

         <div className="burger-menu">
            <ul className="header__nav-list">
               <li>
                  <div className="link-wrap">
                     <a dataGoto=".services" href="#" className="header__link _yellow-link">Услуги</a>
                     {/* <!-- <svg className="link-svg" width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 1L5.61589 6.53907C5.81579 6.77895 6.18421 6.77894 6.38411 6.53907L11 1" strokeWidth="2" strokeLinecap="round" />
                     </svg> --> */}
                  </div>
                  {/* <!-- <ul className="header__sub-nav-list">
                     <div className="nav-list-wrap">
                     <li><a href="" className="header__link _sub-link">Сайт-визитка</a></li>
                     <li><a href="" className="header__link _sub-link">Лендинг</a></li>
                     <li><a href="" className="header__link _sub-link">Корпоративный</a></li>
                     <li><a href="" className="header__link _sub-link">Интернет магазин</a></li>
                     <li><a href="" className="header__link _sub-link">Сайт-каталог</a></li>
                     </div>
                  </ul> --> */}
               </li>
               <li><a dataGoto=".steps" href="#" className="header__link">Этапы работы</a></li>
               <li><a dataGoto=".projects" href="#" className="header__link">Кейсы</a></li>
               <li><a dataGoto="" href="#" className="header__link">Конткаты</a></li>
            </ul>
            <div className="footer__social footer__social_mob social-btns">
               <a href="" className="footer__icon header-ic">
                  <img src={whatsapp} alt="" />
               </a>
               <a href="" className="footer__icon header-ic">
                  <img src={tg} alt="" />
               </a>
            </div>
            <div className="header__btns header__btns_mob">
               <a href="" className="header__btn btn-lang">En</a>
               <a href="" className="header__btn btn-yellow">Заказать звонок</a>
            </div>
         </div>
      </>
   );
}

export default Header;