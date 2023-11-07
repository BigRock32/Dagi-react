

import ServicesList from "./ServicesList";

function ServicesContent({ thisPinWrap, thisAnimWrap }) {
   return (
      <div className="pinWrap" ref={thisPinWrap}>
         <h2 id="pinTitle" className="titleH2 h2-tablet h2Sticky">
            <span className="yellow-text">Наши услуги</span>
            <br /> по созданию сайтов
         </h2>

         <div className="animationWrap to-right" ref={thisAnimWrap}>
            <ServicesList />
         </div>
      </div>
   )
}

export default ServicesContent
