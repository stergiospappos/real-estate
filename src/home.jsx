import React from "react";
import Hero_With_Image from "./Components/heroSections/hero-with-image.jsx";
import OurMission from "./Components/missionSection/ourMission.jsx";
import Features from "./Components/featuresSection/features.jsx";
import Team from "./Components/teamSection/team.jsx";
import ArchiveSection from "./Components/archiveSetction/archive.jsx";

function Home() {
  return (
    <>
      <Hero_With_Image />
      <OurMission />
      <Features />
      <Team />
      <ArchiveSection />
    </>
  );
}

export default Home;
