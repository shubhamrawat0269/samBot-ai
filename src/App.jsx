import Panel from "./components/Panel";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="w-screen h-screen md:flex md:items-center">
      {/* <div className="md:flex md:items-center"> */}
      {/* Sidebar Panel  */}
      <Panel />
      {/* Workspace  */}
      <Workspace />
      {/* </div> */}
    </div>
  );
}

export default App;
