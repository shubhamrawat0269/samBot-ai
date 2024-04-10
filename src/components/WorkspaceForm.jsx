import { useState } from "preact/hooks";

const WorkspaceForm = ({ msgList, dispatch, dispatchError }) => {
  const [text, setText] = useState("");

  const handleSendMsgToOpenAI = async () => {
    // console.log(text);
    const url = `https://api.openai.com/v1/chat/completions`;
    const openAiAPI = "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";

    let model = `gpt-3.5-turbo`;
    let token = `Bearer ${openAiAPI}`;

    let msgToSend = [
      ...msgList,
      {
        role: "user",
        content: text,
      },
    ];

    let res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: msgToSend,
      }),
    });

    let resInJSON = await res.json();

    if (resInJSON.choices) {
      // console.log(resInJSON);
      let newAllMsg = [...msgToSend, resInJSON.choices[0].message];
      // console.log(newAllMsg);
      dispatch(newAllMsg);
    } else {
      dispatchError(resInJSON.error.message);
    }

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
