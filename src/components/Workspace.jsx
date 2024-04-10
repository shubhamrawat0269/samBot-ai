import React from "react";
import WorkspaceForm from "./WorkspaceForm";
import WorkspaceContent from "./WorkspaceContent";

const Workspace = () => {
  return (
    <div className="md:w-5/6 bg-gray-300 h-size-of-screen md:h-full">
      <WorkspaceContent />
      <WorkspaceForm />
    </div>
  );
};

export default Workspace;
