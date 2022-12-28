
import ProjectsOnHome from '../../components/projects/Projects';
import st from './projects.module.scss'



const Projects = () => {
   return (
      <>
         <section className={`${st.projects} first-screen-padding`}>
            <div className="container">
               <h1 className={`${st.projects__title} title-h1`}>Реализованные нами <span className="yellow-text">проекты</span></h1>
               <ProjectsOnHome />
            </div>
         </section>
      </>
   );
}

export default Projects;