import st from './project.module.scss'

import { useParams } from 'react-router-dom'

import { projects } from '../../helpers/projectsList'

import ProjectsLink from '../../components/projects-link/ProjectsLink'


const Project = () => {

   const { id } = useParams()

   const project = projects[id]

   return (
      <section className={`${st.project} first-screen-padding`}>
         <div className="container">
               <h1 className={`${st.projects__title} title-h1`}>{project.title} <span className="yellow-text"></span></h1>
               <div className={`${st.project__head} ${st.head}`}>
               <div className={st.head__top}>
                     <div className={st.head__lable}>Технологии:</div>
                     <div className={st.head__imgRow}>
                        <img src={project.skills.figma} alt="figma" className={st.head__img} />
                        <img src={project.skills.psd} alt="psd" className={st.head__img} />
                        <img src={project.skills.ai} alt="ai" className={st.head__img} />
                        <img src={project.skills.js} alt="js" className={st.head__img} />
                        <img src={project.skills.sql} alt="sql" className={st.head__img} />
                        <img src={project.skills.php} alt="php" className={st.head__img} />
                     </div>
                  </div>
                  <div className={st.head__bottom}>
                     <div className={st.head__lable}>Описание:</div>
                     <p className={st.head__text}>{project.descriptBig}</p>
                  </div>
               </div>
            <div className={st.project__wrap}>
               <div className={st.project__images}>
                  <img src={project.imgPrev} alt="" className={st.project__image} />
                  <img src={project.imgBig} alt="" className={st.project__image} />
               </div>
               <ProjectsLink text='Вернуться к проектам' path='/projects' />
            </div>
         </div>
      </section>
   );
}

export default Project;