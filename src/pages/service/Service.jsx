import { useParams } from 'react-router-dom';

import { services } from '../../helpers/servicesList';

import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

import ServiceForm from '../../components/service-form/ServiceForm';
import OpenModalBtn from '../../components/open-modal-btn/OpenModalBtn';

import st from './service.module.scss'

import animJson from "./serviceAnim.json"


const Service = (props) => {
   const {id} = useParams()

   const service = services[id]

   const container = useRef(null)

   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         rerender: 'svg',
         loop: true,
         autoplay: true,
         animationData: animJson
      })
      return () => {
         lottie.destroy();
      }
   }, [])

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
                  <div className={st.service__anim} ref={container} ></div>
               </div>
            </div>
            <OpenModalBtn openModal={props.openModal} />
         </div>
      </section>
   );
}

export default Service;