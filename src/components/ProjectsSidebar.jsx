import React from 'react'
import { useState } from 'react';

function ProjectsSidebar() {
    const [Projects, setProjects] = useState([])
    const handleClick = () => {
        setProjects([...Projects, 'New Project'])
    }
  return (
    <div className="bg-stone-900 w-64 h-screen p-4 rounded-tr-2xl mt-8">
      <h1 className="text-white font-bold m-4 text-lg">Your Projects</h1>
      <button
        className="text-white/50 bg-stone-700 h-8 w-full rounded pt-5 pb-5 flex items-center justify-center "
        onClick={handleClick}
      >
        + Add Project
      </button>
    </div>
  );
}

export default ProjectsSidebar