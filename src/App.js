import "./App.css";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <div className="App flex flex-row">
      <ProjectsSidebar />
      <NewProject />
    </div>
  );
}

export default App;
