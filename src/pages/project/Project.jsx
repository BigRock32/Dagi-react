import st from './project.module.scss'

import { useParams } from 'react-router-dom'

import { projects } from '../../helpers/projectsList'

import ProjectsLink from '../../components/projects-link/ProjectsLink'
import ImgTooltip from './ImgTooltip'
import BackBtn from '../../components/puckPuck/BackBtn'


const Project = () => {

   const { id } = useParams()

   const project = projects[id]

   const skills = project.skills


   return (
      <section className={`${st.project} first-screen-padding`}>
         <BackBtn text='Назад' />
         <div className="container">
         {/* <BackBtn text='Назад' /> */}
            <h1 className={`${st.projects__title} title-h1`}>{project.title} <span className="yellow-text"></span></h1>
            <div className={`${st.project__head} ${st.head}`}>
               <div className={st.head__top}>
                  <div className={st.head__lable}>Технологии:</div>
                  <div className={st.head__imgRow}>

                     {skills.map((skill, index) => {
                        return <ImgTooltip key={index} skill={skill} />
                     })}

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
               <ProjectsLink text='Все наши проекты' path='/projects' />
            </div>
         </div>
      </section>
   );
}

export default Project;