import React from "react";

function TeamMember({ data }) {
  return (
    <div className="team-grid--grid-item">
      <img
        className="team-grid--grid-item--img"
        src={data.img}
        alt={data.name}
      />
      <h3 className="team-grid--grid-item--name">{data.name}</h3>
      <p className="team-grid--grid-item--position">{data.position}</p>
    </div>
  );
}

export default TeamMember;
