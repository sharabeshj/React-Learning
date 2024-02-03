import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { NoProjectPage } from "./components/NoProject";

function App() {
  const [projectData, setProjectData] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleAddProject() {
    setProjectData((prevState) => ({
      ...prevState,
      selectedProject: null
    }))
  }

  let content;

  if (projectData.selectedProject === undefined) content = <NoProjectPage  handleAddProject={handleAddProject}/>
  else if (projectData.selectedProject === null) content = <NewProject  />

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
