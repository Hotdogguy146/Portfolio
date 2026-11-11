import { PROFILE, RESUME, TIMELINE } from "../data";
import portraitImage from "../assets/profile-portrait.png";
import TimelineItem from "./TimelineItem";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="section-head">
        <h2>About Me</h2>
        <p>A little about my background, the work I do, and what I am working toward.</p>
      </div>

      <div className="about-intro">
        <img className="about-portrait" src={portraitImage} alt={`Portrait of ${PROFILE.name}`} />
        <div className="about-intro-copy">
          <div className="eyebrow">IT Student · Web Developer · Research Enthusiast</div>
          <h3>{PROFILE.name}</h3>
          <p>
            I am an IT student at {PROFILE.school} who enjoys building useful technology.
            My experience spans web development, applied research, and student leadership,
            with a focus on practical solutions to real-world problems.
          </p>
          <p>
            I am especially interested in web applications and AI, and in combining thoughtful
            design with hands-on development to make technology easier to use.
          </p>
          <div className="about-focus">
            <span>Current focus</span>
            <strong>{PROFILE.focus}</strong>
          </div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-column">
          <div className="mini-card">
            <h3>Education</h3>
            <ul className="list-stack">
              {RESUME.education.map((item) => (
                <li key={item.period}>
                  <strong>{item.period}</strong>
                  <span>{item.title}</span>
                  <small>{item.detail}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="mini-card">
            <h3>Experience</h3>
            <ul className="list-stack">
              {RESUME.experience.map((item) => (
                <li key={`${item.period}-${item.title}`}>
                  <strong>{item.period}</strong>
                  <span>{item.title}</span>
                  <small>{item.detail}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="mini-card">
            <h3>Certificates</h3>
            <ul className="award-list">
              {RESUME.certificates.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="about-column">
          <div className="mini-card">
            <h3>My Journey</h3>
            <div className="timeline">
              {TIMELINE.map((entry, i) => <TimelineItem key={i} entry={entry} />)}
            </div>
          </div>

          <div className="mini-card">
            <h3>Seminars & Training</h3>
            <ul className="list-stack compact-list">
              {RESUME.seminars.map((item) => (
                <li key={`${item.period}-${item.title}`}>
                  <strong>{item.period}</strong>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mini-card">
            <h3>Organizations</h3>
            <ul className="org-list">
              {RESUME.organizations.map((org) => (
                <li key={org.name}>
                  <span>{org.name}</span>
                  <ul>
                    {org.roles.map((role) => <li key={role}>{role}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="mini-card">
            <h3>Awards & Recognition</h3>
            <ul className="award-list">
              {RESUME.awards.map((award) => <li key={award}>{award}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
