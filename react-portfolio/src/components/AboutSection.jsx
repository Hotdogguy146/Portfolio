import { PROFILE, RESUME, TIMELINE } from "../data";
import TimelineItem from "./TimelineItem";

function AboutSection() {
  return (
    <section>
      <div className="section-head">
        <h2>About</h2>
        <p>Career snapshot, education, and the activities shaping my growth as an IT student.</p>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <div className="profile-card">
            <p>
              I am {PROFILE.name}, an IT student from {PROFILE.school} with a strong interest in
              creating meaningful technology solutions. My work combines software development,
              research, and leadership, with a focus on digital tools that solve real problems.
            </p>
            <p>
              My current focus includes web development, AI-driven learning tools, and practical
              applications that bring together technical execution and user-centered design.
            </p>
          </div>

          <div className="resume-grid">
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
              <h3>Certificates</h3>
              <ul className="list-stack compact-list">
                {RESUME.certificates.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mini-card">
            <h3>Experience Highlights</h3>
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
        </div>

        <div className="timeline-panel">
          <div className="timeline">
            {TIMELINE.map((entry, i) => <TimelineItem key={i} entry={entry} />)}
          </div>

          <div className="mini-card side-card">
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

          <div className="mini-card side-card">
            <h3>Affiliated Organizations</h3>
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

          <div className="mini-card side-card">
            <h3>Awards & Recognitions</h3>
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
