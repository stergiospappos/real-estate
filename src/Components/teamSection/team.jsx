import React from "react";
import "./team.css";
import teamMembers from "./team-data.js";
import TeamMember from "./team-item.jsx";

function Team() {
  return (
    <section className="team-grid">
      <div className="team-grid--grid-item">
        <h2 className="team-grid--grid-item--title">
          The Team That Turns Dreams Into Reality
        </h2>
      </div>

      {teamMembers.map((item, index) => (
        <TeamMember key={index} data={item} />
      ))}
    </section>
  );
}

export default Team;
