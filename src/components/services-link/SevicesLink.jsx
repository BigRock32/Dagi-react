import { NavLink } from "react-router-dom";


const ServicesLink = ({index, title, setNav}) => {
   const activeLink = 'header__link header__link_sub-link header__link_sub-link_active'
   const normalLink = 'header__link header__link_sub-link'

   return (
      <li>
         <NavLink to={`/service/${index}`} className={({ isActive }) => isActive ? activeLink : normalLink} onClick={setNav}>{title}</NavLink>
      </li>
   );
}

export default ServicesLink;