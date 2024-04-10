import React from "react";
import WorkspaceForm from "./WorkspaceForm";
import WorkspaceContent from "./WorkspaceContent";
import { useState } from "preact/hooks";

const Workspace = () => {
  const [message, setMessage] = useState([]);

  return (
    <div className="md:w-5/6 bg-gray-300 h-size-of-screen md:h-full">
      <WorkspaceContent message={message} />
      <WorkspaceForm msgList={message} dispatch={setMessage} />
    </div>
  );
};

export default Workspace;
