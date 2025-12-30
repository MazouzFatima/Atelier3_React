import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  // État global unique (Spécification page 3)
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined = accueil, null = formulaire, ID = projet choisi
    projects: [],
    tasks: []
  });

  // Gérer l'ajout d'une tâche (State Lifting - Page 8)
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, // On lie la tâche au projet sélectionné
        id: Math.random().toString(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({ ...prevState, selectedProjectId: id }));
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => ({ ...prevState, selectedProjectId: null }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({ ...prevState, selectedProjectId: undefined }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = { ...projectData, id: Math.random().toString() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((p) => p.id !== prevState.selectedProjectId),
    }));
  }

  // --- Logique d'affichage (Rendu conditionnel - Page 2) ---
  const selectedProject = projectsState.projects.find(
    (p) => p.id === projectsState.selectedProjectId
  );

  // Filtrage des tâches pour le projet sélectionné
  const selectedProjectTasks = projectsState.tasks.filter(
    (t) => t.projectId === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={selectedProjectTasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;