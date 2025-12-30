import React from "react";

function ProjectsSidebar({ projects = [], onSelectProject, onStartAddProject }) {
  return (
    <div className="bg-stone-900 w-64 h-[calc(100vh-2rem)] p-4 rounded-tr-2xl mt-8">
      <h1 className="text-white font-bold m-4 text-lg">Your Projects</h1>

     
      <button
        onClick={onStartAddProject}
        className="text-white/50 bg-stone-700 w-full rounded py-2 flex items-center justify-center mb-6"
      >
        + Add Project
      </button>

      <ul className="text-white/50">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <li
              key={index}
              className="m-2 cursor-pointer"
              
              onClick={() => onSelectProject(project.id)}
            >
              {project?.name || project}
            </li>
          ))
        ) : (
          <li>No projects available</li>
        )}
      </ul>
    </div>
  );
}

export default ProjectsSidebar;
