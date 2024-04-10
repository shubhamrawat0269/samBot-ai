import React from "react";
import Logo from "../assets/Logo.jsx";

const WorkspaceContent = ({ messages, error }) => {
  if (error.length > 0) {
    return (
      <div className="h-size-of-wrkspace p-5 w-5/6 m-auto md:h-5/6">
        <div className="bg-red-700 text-white text-center py-2">{error}</div>
      </div>
    );
  }
  return (
    <div className="h-size-of-wrkspace p-5 w-5/6 m-auto md:h-5/6">
      <div className="flex flex-col items-center gap-2 pt-2">
        <Logo size={50} />
        <h2 className="text-2xl font-bold">How Can I help you today?</h2>
      </div>
      <div className="flex flex-col max-h-full overflow-auto px-5">
        <div>
          {/* <div className="flex gap-5 p-3 rounded-lg items-center bg-gray-300">
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
          </div> */}

          {messages.map((msg, index) => {
            return (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? "flex gap-5 p-3 rounded-lg items-center bg-gray-300"
                    : "flex gap-2 p-3 rounded-lg items-center bg-teal-600 text-white"
                }
              >
                <figure>
                  {msg.role === "user" ? (
                    <img src="images/user.png" className="w-8" alt="user" />
                  ) : (
                    <Logo size={30} />
                  )}
                </figure>
                <h4>{msg.content}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceContent;
