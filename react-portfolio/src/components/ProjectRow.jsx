import { useEffect, useState } from "react";

function ProjectRow({ project, isOpen, onToggle }) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsImageOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isImageOpen]);

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  }

  return (
    <>
    <div
      className={`project-row${isOpen ? " is-open" : ""}`}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <div className="project-year">{project.year}</div>
      <div className="project-copy">
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.desc}</div>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <button
        className="project-image-button"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsImageOpen(true);
        }}
        aria-label={`View ${project.name} image full size`}
      >
        <img className="project-image" src={project.image} alt={`${project.name} preview`} />
      </button>
      <div className="project-toggle">{isOpen ? "Hide" : "Details"}</div>
      <div className="project-detail" aria-hidden={!isOpen}>{project.detail}</div>
    </div>
    {isImageOpen && (
      <div
        className="image-preview"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} full-size image`}
        onClick={() => setIsImageOpen(false)}
      >
        <img
          src={project.image}
          alt={`${project.name} full-size preview`}
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}

export default ProjectRow;
