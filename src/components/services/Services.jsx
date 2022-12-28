import st from './services.module.scss'

import { services } from '../../helpers/servicesList';

import Service from './../service/Service'

const Servises = () => {
   return (
      <section className={`${st.services} ${st.horizontal}`}>
         <div className={st.pinWrap}>
            <div className="container">
               <h2 className={`titleH2 h2-tablet ${st.h2Sticky}`}><span className="yellow-text">Наши услуги</span> по созданию сайтов</h2>
            </div>
            <div className={`${st.animationWrap} to-right`}>
               {services.map((service, index) => {
                  return <Service key={index} title={service.title} item1={service.list.item1} item2={service.list.item2} item3={service.list.item3} item4={service.list.item4} price={service.price} index={index} />
               })}
            </div>
         </div> 
      </section>
   );
}

export default Servises;