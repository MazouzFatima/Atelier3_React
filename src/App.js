import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, 
    projects: [],
    tasks: []
  });
  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(), 
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }
  function handleDeleteProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((p) => p.id !== projectId),
      tasks: prevState.tasks.filter((t) => t.projectId !== projectId),
    }));
  }

  function handleAddTask(taskText) {
    setProjectsState((prevState) => {
      const newTask = {
        id: Math.random().toString(),
        text: taskText,
        projectId: prevState.selectedProjectId, 
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={selectedProjectTasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={() => handleDeleteProject(selectedProject.id)}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <div className="flex min-h-screen gap-8 bg-stone-200">
      <ProjectsSidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
      />
      <main className="flex-1 mt-8">
        {content}
      </main>
    </div>
  );
}

export default App;