import "./projectsLink.scss";

import { NavLink } from "react-router-dom";

const ProjectsLink = ({ text }) => {
  const currentPath = window.location.pathname;

  return (
    <NavLink
      to={currentPath !== "/projects" ? "/projects" : "/"}
      className="link"
    >
      <div>{text}</div>
      <div className="link__line-box">
        <div className="link__line"></div>
        <div className="link__line-2"></div>
      </div>
    </NavLink>
  );
};

export default ProjectsLink;
