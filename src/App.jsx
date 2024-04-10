import Panel from "./components/Panel";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="md:flex md:items-center h-screen">
      {/* Sidebar Panel  */}
      <Panel />
      {/* Workspace  */}
      <Workspace />
    </div>
  );
}

export default App;
