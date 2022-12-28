import { NavLink } from "react-router-dom";

import st from "./project.module.scss"


const Project = ({title, imgPrev, desc, index}) => {
   return (
      <NavLink className={st.project} to={`/project/${index}`} >

            <div className={st.project__imageBox}>
               <img src={imgPrev} alt={title} className={st.project__img} />
            </div>
            <h4 className={`${st.project__title} title-h4`}>{title}</h4>
            <p className={st.project__text}>{desc}</p>

      </NavLink>
   );
}

export default Project;