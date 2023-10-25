import st from './project.module.scss'

import { useState } from 'react'


function ImgTooltip({ skill }) {

   const [showToolTip, setShowToolTip] = useState(false);

   const onMouseEnterHandler = () => {
      setShowToolTip(true);
   };

   const onMouseLeaveHandler = () => {
      setShowToolTip(false);
   };

   return (
      <div className={st.tooltipContainer} onMouseOver={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
         {showToolTip && <div className={st.tooltipContainer__tooltip}>
            {skill.tooltipText}
            <div className={st.tooltipContainer__arrow}></div>
         </div>}
         <img src={skill.img} alt={skill.alt} className={st.head__img} />
      </div>
   )
}

export default ImgTooltip
