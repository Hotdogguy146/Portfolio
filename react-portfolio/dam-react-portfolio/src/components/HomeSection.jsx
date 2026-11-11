import React from "react";
import { SKILLS, PROJECTS } from "../data";
import SkillPill from "./SkillPill";

function HomeSection({ goTo }) {
  return (
    <section>
      <div className="eyebrow">Portfolio</div>
      <h1 className="hero-title">Damianne — building things with code.</h1>
      <p className="hero-lede">
        IT student at CLSU, working across web development and applied machine learning. <br /> 
        This page is itself a lab project: a small React app with four sections, built from functional components.
      </p>

      <div className="cta-row">
        <button className="btn btn-primary" onClick={() => goTo("projects")}>
          View projects
        </button>
        <button className="btn btn-ghost" onClick={() => goTo("contact")}>
          Get in touch
        </button>
      </div>

      <div className="stat-row">
        <div>
          <div className="stat-num">{PROJECTS.length}</div>
          <div className="stat-label">Featured projects</div>
        </div>
        <div>
          <div className="stat-num">{SKILLS.length}</div>
          <div className="stat-label">Core skills</div>
        </div>
        <div>
          <div className="stat-num">CLSU</div>
          <div className="stat-label">Currently studying at</div>
        </div>
      </div>

      <div className="skill-grid">
        {SKILLS.map((s) => <SkillPill key={s} label={s} />)}
      </div>
    </section>
  );
}

export default HomeSection;
