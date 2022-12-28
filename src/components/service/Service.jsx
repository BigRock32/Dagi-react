import st from './service.module.scss'

import arrowBtn from './../../media/btn-arrow.svg'
import { NavLink } from 'react-router-dom';


const Service = ({ title, item1, item2, item3, item4, price, index }) => {
   return (
      <NavLink to={`/service/${index}`} className={st.item}>
         <div className={st.item__wrap}>
            <h3 className={`${st.item__title} title-h3`}>{title}</h3>
            <ul className={st.item__list}>
               <li>{item1}</li>
               <li>{item2}</li>
               <li>{item3}</li>
               <li>{item4}</li>
            </ul>
            <div className={st.item__price}>{price}</div>
            <div className={`${st.item__btn} arrowBtn`}>
               <div className={st.item__btnText}>Перейти к услуге</div>
               <img src={arrowBtn} alt="стрелка" className={st.item__btnIcon} />
            </div>
         </div>
      </NavLink>
   );
}

export default Service;