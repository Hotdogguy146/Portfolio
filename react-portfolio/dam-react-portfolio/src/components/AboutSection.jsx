import React from "react";
import { TIMELINE } from "../data";
import TimelineItem from "./TimelineItem";

function AboutSection() {
  return (
    <section>
      <div className="section-head">
        <h2>About</h2>
        <p>A short background, and a quick timeline of what's current.</p>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I'm an IT student who enjoys the practical side of software —
            shipping small, working things rather than only studying theory.
            Most of my recent work sits at the intersection of web
            development and applied machine learning.
          </p>
          <p>
            Outside coursework, I take part in student organization
            activities and pick up projects that let me practice end to end:
            planning, building, and presenting the result.
          </p>
        </div>
        <div className="timeline">
          {TIMELINE.map((entry, i) => <TimelineItem key={i} entry={entry} />)}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
