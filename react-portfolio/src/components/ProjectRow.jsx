import { useEffect, useState } from "react";

function ProjectRow({ project, isOpen, onToggle }) {
  const [previewIndex, setPreviewIndex] = useState(null);
  const images = project.images ?? [project.image];

  useEffect(() => {
    if (previewIndex === null) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setPreviewIndex(null);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [previewIndex]);

  function handleKeyDown(event) {
    if (event.target !== event.currentTarget) return;
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
        {project.link && (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            {project.linkLabel ?? "View project"} ↗
          </a>
        )}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-image-gallery">
        {images.map((image, imageIndex) => (
          <button
            className="project-image-button"
            key={image}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setPreviewIndex(imageIndex);
            }}
            aria-label={`View ${project.name} image ${imageIndex + 1} full size`}
          >
            <img className="project-image" src={image} alt={`${project.name} preview ${imageIndex + 1}`} />
          </button>
        ))}
      </div>
      <div className="project-toggle">{isOpen ? "Hide" : "Details"}</div>
      <div className="project-detail" aria-hidden={!isOpen}>{project.detail}</div>
    </div>
    {previewIndex !== null && (
      <div
        className="image-preview"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} full-size image ${previewIndex + 1}`}
        onClick={() => setPreviewIndex(null)}
      >
        <img
          src={images[previewIndex]}
          alt={`${project.name} full-size preview ${previewIndex + 1}`}
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}

export default ProjectRow;
