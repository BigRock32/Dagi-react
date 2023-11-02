import Navbar from '../navbar/Navbar';
import st from './burger.module.scss'

import whatsapp from './../../media/Whatsapp.svg'
import tg from './../../media/Telegram.svg'
import NavbarBurger from '../navbarHeader/NavbarBurger';

const Burger = ({nav, setNav}) => {
   return (
      <div className={nav ? `burger-menu _active` : `burger-menu`}>
         <NavbarBurger setNav={setNav}/>
         <div className="footer__social footer__social_mob social-btns">
            <a href="" className="footer__icon header-ic">
               <img src={whatsapp} alt="" />
            </a>
            <a href="https://t.me/dagiwebagancy" className="footer__icon header-ic">
               <img src={tg} alt="tg" />
            </a>
         </div>
         {/* <div className="header__btns header__btns_mob">
            <a href="" className="header__btn btn-lang">En</a>
            <a href="" className="header__btn btn-yellow">Заказать звонок</a>
         </div> */}
      </div>
   );
}

export default Burger;