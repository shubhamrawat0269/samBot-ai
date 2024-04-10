import { useState } from "preact/hooks";
import sendMsgToOpenAi from "../config/gemini";

const WorkspaceForm = ({ msgList, dispatch }) => {
  const [text, setText] = useState("");

  const handleSendMsgToOpenAI = async () => {
    const answer = await sendMsgToOpenAi(text);

    let container = [
      ...msgList,
      {
        question: text,
        solution: answer,
      },
    ];

    // console.log(container);
    dispatch(container);
    setText("");
  };

  return (
    <div className="flex flex-col gap-2 pt-4 md:flex-row md:justify-center md:items-center md:h-1/6">
      <input
        type="text"
        value={text}
        className="w-5/6 h-10 p-4 outline-none m-auto md:m-0"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Here..."
      />
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2">
        <button
          onClick={handleSendMsgToOpenAI}
          className="bg-gray-700 text-white py-2 px-5 w-5/6 m-auto md:w-4/6 md:m-0 md:rounded-lg"
        >
          Ask
        </button>
        <button className="bg-gray-700 text-white py-2 w-5/6 m-auto px-5 md:w-4/6 md:m-0 md:rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default WorkspaceForm;
