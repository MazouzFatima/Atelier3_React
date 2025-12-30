import React from "react";

function ProjectsSidebar({ projects = [] }) {
  return (
    <div className="bg-stone-900 w-64 h-screen p-4 rounded-tr-2xl mt-8">
      <h1 className="text-white font-bold m-4 text-lg">Your Projects</h1>
      <button className="text-white/50 bg-stone-700 w-full rounded py-2 flex items-center justify-center mb-6">
        + Add Project
      </button>
      <ul className="text-white">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <li key={index} className="m-2">
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
