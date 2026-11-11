import { HIGHLIGHTS, PROFILE, SKILLS, SOFT_SKILLS } from "../data";
import SkillPill from "./SkillPill";

function HomeSection({ goTo }) {
  return (
    <section>
      <div className="eyebrow">Portfolio</div>
      <h1 className="hero-title">{PROFILE.name}</h1>
      <div className="hero-meta">{PROFILE.role}</div>
      <p className="hero-lede">
        IT student at {PROFILE.school}, focused on web development, practical problem-solving,
        and technology-driven research. I enjoy building useful digital experiences and
        turning ideas into working projects that create value.
      </p>

      <div className="cta-row">
        <button className="btn btn-primary" onClick={() => goTo("projects")}>
          View projects
        </button>
        <button className="btn btn-ghost" onClick={() => goTo("about")}>
          Resume overview
        </button>
      </div>

      <div className="stat-row">
        {HIGHLIGHTS.map((item) => (
          <div key={item.label}>
            <div className="stat-num">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-badges">
        {SOFT_SKILLS.map((skill) => (
          <span key={skill} className="hero-badge">{skill}</span>
        ))}
      </div>

      <div className="skill-grid">
        {SKILLS.map((s) => <SkillPill key={s} label={s} />)}
      </div>
    </section>
  );
}

export default HomeSection;
