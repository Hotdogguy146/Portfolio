import React, { useState } from "react";
import { PROJECTS } from "../data";
import ProjectRow from "./ProjectRow";

function ProjectsSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section>
      <div className="section-head">
        <h2>Projects</h2>
        <p>A few things worked on recently. Click a row for more detail.</p>
      </div>
      <div className="project-list">
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.name}
            project={project}
            isOpen={openId === i}
            onToggle={() => setOpenId(openId === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
