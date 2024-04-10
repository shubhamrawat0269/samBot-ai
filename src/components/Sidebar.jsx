import { CiEdit } from "react-icons/ci";
const Sidebar = ({ show }) => {
  return (
    <div className={show ? "" : "hidden md:block"}>
      <div className="bg-gray-500">
        <div className="flex items-center justify-around py-3">
          <h3 className="font-bold">New Chat</h3>
          <div className="cursor-pointer">
            <CiEdit size={20} />
          </div>
        </div>
      </div>
      <div className="my-5 py-2 flex flex-col gap-2">
        <div className="bg-gray-700 text-gray-400 p-2 w-5/6 m-auto rounded-xl text-center cursor-pointer">
          Topic 1
        </div>
        <div className="bg-gray-700 text-gray-400 p-2 w-5/6 m-auto rounded-xl text-center cursor-pointer">
          Topic 2
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
