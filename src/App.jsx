import React from "react";
import Header from "./SharedComponent/Header.jsx";
import Hero_With_Image from "./Components/heroSections/hero-with-image.jsx";
import OurMission from "./Components/ourMission.jsx";
import Features from "./Components/featuresSection/features.jsx";
import Team from "./Components/teamSection/team.jsx";

function App() {
  return (
    <div id="app">
      <Header />
      <Hero_With_Image />
      <OurMission />
      <Features />
      <Team />
    </div>
  );
}

export default App;
