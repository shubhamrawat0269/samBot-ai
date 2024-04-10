import React from "react";
import Logo from "../assets/Logo.jsx";

// API KEY --> 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

const WorkspaceContent = () => {
  return (
    <div className="h-size-of-wrkspace p-5 w-5/6 m-auto md:h-5/6">
      <div className="flex flex-col items-center gap-2 pt-2">
        <Logo size={50} />
        <h2 className="text-2xl font-bold">How Can I help you today?</h2>
      </div>
      <div className="flex flex-col max-h-full overflow-auto px-5">
        <div>
          <div className="flex gap-5 p-3 rounded-lg items-center bg-gray-300">
            <figure>
              <img src="images/user.png" className="w-8" alt="user" />
            </figure>
            <h4>What is Your Name?</h4>
          </div>
          <div className="flex gap-2 p-3 rounded-lg items-center bg-teal-600 text-white">
            <figure>
              <Logo size={30} />
            </figure>
            <h4>Your Name is Shubham Rawat</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceContent;
