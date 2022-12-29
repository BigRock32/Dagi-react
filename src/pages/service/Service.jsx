import { useParams } from 'react-router-dom';

import { services } from '../../helpers/servicesList';


import ServiceForm from '../../components/service-form/ServiceForm';
import st from './service.module.scss'



import serviceAnim from './../../media/service-anim.svg'

const Service = () => {
   const {id} = useParams()

   const service = services[id]

   return (
      <section className={`${st.service} first-screen-padding`}>
         <div className="container">
            <div className={st.service__row}>
               <div className={st.service__content}>
                  <h1 className={`${st.service__title} title-h1`}>{service.title}</h1>
                  <h2 className={`${st.service__price} titleH2`}>{service.price}</h2>
                  <ul className={st.service__list}>
                     <li>{service.list.item1}</li>
                     <li>{service.list.item2}</li>
                     <li>{service.list.item3}</li>
                     <li>{service.list.item4}</li>
                  </ul>
                  <div className={st.service__lable}>Описание:</div>
                  <p className={st.service__text}>{service.descript}</p>
               </div>
               <div className={st.service__animation}>
                  <img src={serviceAnim} alt="" className={st.service__animImg} />
               </div>
            </div>
            <ServiceForm />
         </div>
      </section>
   );
}

export default Service;