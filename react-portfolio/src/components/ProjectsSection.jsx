import { useState } from "react";
import { PROJECTS } from "../data";
import ProjectRow from "./ProjectRow";

function ProjectsSection() {
  const [openId, setOpenId] = useState(null);
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))];
  const visibleProjects = category === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === category);

  return (
    <section>
      <div className="section-head">
        <h2>Projects</h2>
        <p>Explore my work by type, then open a project for more detail.</p>
      </div>
      <div className="project-filters" aria-label="Filter projects by category">
        {categories.map((item) => (
          <button
            className={`filter-button${category === item ? " active" : ""}`}
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
              setOpenId(null);
            }}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-list">
        {visibleProjects.map((project, i) => (
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
