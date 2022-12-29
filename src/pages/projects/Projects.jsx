
import Projects from '../../components/projects/Projects';
import st from './projectsPage.module.scss'



const ProjectsPage = () => {
   return (
      <>
         <section className={`${st.projects} first-screen-padding`}>
            <div className="container">
               <h1 className={`${st.projects__title} title-h1`}>Реализованные нами <span className="yellow-text">проекты</span></h1>
               <Projects />
            </div>
         </section>
      </>
   );
}

export default ProjectsPage;