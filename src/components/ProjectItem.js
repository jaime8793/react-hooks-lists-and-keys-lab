import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const technologyElement = technologies.map((technology, id)=>{
  return <span key = {id} > {technology}</span>;
});
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyElement}
      </div>
    </div>
  );
}

export default ProjectItem;
