import Project from '../project/Project'
import ProjectsLink from '../projects-link/ProjectsLink';
import TitleH2 from '../title-h2/TitleH2';

import st from './projects.module.scss'

import { projects } from '../../helpers/projectsList';

const ProjectsOnHome = () => {
   return (
      <section className={st.projects}>
         <div className="container">
            <div className={st.projects__row}>
               {projects.map((project, index) => {
                  return <Project key={index} title={project.title} imgPrev={project.imgPrev} desc={project.descript} index={index} />
               })}

               <ProjectsLink text='Смотреть все проекты' />


            </div>
         </div>
      </section>
   );
}

export default ProjectsOnHome;