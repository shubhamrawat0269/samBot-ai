import React from "react";
import WorkspaceForm from "./WorkspaceForm";
import WorkspaceContent from "./WorkspaceContent";
import { useState } from "preact/hooks";

const Workspace = () => {
  const [error, setError] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  return (
    <div className="md:w-5/6 bg-gray-300 h-size-of-screen md:h-full">
      <WorkspaceContent messages={allMessages} error={error} />
      <WorkspaceForm
        msgList={allMessages}
        dispatch={setAllMessages}
        dispatchError={setError}
      />
    </div>
  );
};

export default Workspace;
