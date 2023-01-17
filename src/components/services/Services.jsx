import './services.scss'

import { services } from '../../helpers/servicesList';

import Service from './../service/Service'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';

const Servises = () => {

   gsap.registerPlugin(ScrollTrigger);


   const horizontalSections = gsap.utils.toArray('section.horizontal')

   const thisPinWrap = useRef(null);
   const thisAnimWrap = useRef(null);

   useEffect(() => {
      const el = thisAnimWrap.current
      const pinWrap = thisPinWrap.current

      horizontalSections.forEach(function (sec, i) {
         if (!el || !pinWrap) return

         const getToValue = () => -(el.scrollWidth - window.innerWidth);

         const size = window.innerHeight / 5


         gsap.fromTo(el, {
            x: () => el.classList.contains('to-right') ? 0 : getToValue()
         }, {
            x: () => el.classList.contains('to-right') ? getToValue() : 0,
            ease: "none",
            scrollTrigger: {
               // trigger: sec,
               start: () => "+=" + (-size),
               end: () => "+=" + (el.scrollWidth - window.innerWidth),
               pin: pinWrap,
               invalidateOnRefresh: true,
               //anticipatePin: 1,
               scrub: true,
               //markers: true,
            }
         });
      });

   }, [thisPinWrap.current, thisAnimWrap.current])

   return (
      <section className='services horizontal'>
         {/* <div className={st.pinWrap}>

            <h2 className={`titleH2 h2-tablet ${st.h2Sticky}`}><span className="yellow-text">Наши услуги</span><br /> по созданию сайтов</h2>

            <div className={`${st.animationWrap} to-right`}>
               {services.map((service, index) => {
                  return <Service key={index} title={service.title} item1={service.list.item1} item2={service.list.item2} item3={service.list.item3} item4={service.list.item4} price={service.price} index={index} />
               })}
            </div>
         </div> */}

         <div className='pinWrap' ref={thisPinWrap}>

            {/* <h2 className='titleH2 h2-tablet h2Sticky'><span className="yellow-text">Наши услуги</span><br /> по созданию сайтов</h2> */}

            <div className='animationWrap to-right' ref={thisAnimWrap}>
               {services.map((service, index) => {
                  return <Service key={index} title={service.title} item1={service.list.item1} item2={service.list.item2} item3={service.list.item3} item4={service.list.item4} price={service.price} index={index} />
               })}
            </div>
         </div>
      </section>
   );
}

export default Servises;