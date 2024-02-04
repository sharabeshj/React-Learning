import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { NoProjectPage } from "./components/NoProject";
import { SelectedProject } from "./components/SelectedProject";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddProject() {
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProject: null
    }))
  }

  function handleSave(projectData) {
    let newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProject: undefined,
      projects: [...projectInfo.projects, newProject]
    }))
  }

  function handleDelete(id) {
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProject: undefined,
      projects: prevState.projects.filter((project) => project.id !== id)
    }))
  }

  function handleChangeProject(id){
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProject: id
    }));
  }

  function handleCancel() {
    setProjectInfo({
      ...projectInfo,
      selectedProject: undefined
    })
  }

  function handleAddTask(value) {
    const newTask = {
      text: value,
      projectId: projectInfo.selectedProject,
      id: Math.random()
    }

    setProjectInfo((prevState) => ({
      ...prevState,
      tasks: [newTask, ...prevState.tasks]
    }))
  }

  function handleDeleteTask(taskId) {
    setProjectInfo((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => (task.id !== taskId && task.projectId === projectInfo.selectedProject))
    }))
  }

  let content;

  if (projectInfo.selectedProject === undefined) content = <NoProjectPage  handleAddProject={handleAddProject}/>
  else if (projectInfo.selectedProject === null) content = <NewProject handleSave={handleSave} handleCancel={handleCancel}/>
  else content = (<SelectedProject onDelete = {handleDeleteTask} tasks={projectInfo.tasks.filter((task) => task.projectId == projectInfo.selectedProject)} onAdd={handleAddTask} handleDelete={handleDelete} projectData={projectInfo.projects.find((project) => project.id === projectInfo.selectedProject)}/>)
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar selectedProject={projectInfo.selectedProject} handleChangeProject={handleChangeProject} handleAddProject={handleAddProject} projects={projectInfo.projects}/>
      {content}
    </main>
  );
}

export default App;
