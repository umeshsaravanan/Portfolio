import React from "react";
import Header from "./Component/Header/Header";
import TopContainer from "./Component/TopContainer/TopContainer";
import SkillContainer from "./Component/SkillContainer/SkillContainer";
import ProjectContainer from "./Component/ProjectContainer/ProjectContainer";
import "./App.css"
import Contact from "./Component/Contact/Contact";
import Join from "./Component/Join/Join";


const App=()=>{
  return(
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Join />
      <Contact/>
    </div>
  )
}
export default App;