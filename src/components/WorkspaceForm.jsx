import React from "react";

const WorkspaceForm = () => {
  return (
    <form className="flex flex-col gap-4 pt-4 md:flex-row md:gap-0 md:justify-around">
      <input
        type="text"
        className="p-2 w-5/6 m-auto md:w-5/6"
        placeholder="Type Here..."
      />
      <div className="flex flex-col md:flex-row gap-2">
        <button className="bg-gray-700 text-white py-2 px-5 w-5/6 m-auto md:w-4/6 md:m-0 md:rounded-lg">
          Ask
        </button>
        <button className="bg-gray-700 text-white py-2 w-5/6 m-auto px-5 md:w-4/6 md:m-0 md:rounded-lg">
          Save
        </button>
      </div>
    </form>
  );
};

export default WorkspaceForm;
