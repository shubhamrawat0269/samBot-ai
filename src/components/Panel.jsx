import { useState } from "preact/hooks";
import { IoMdMenu } from "react-icons/io";

import Sidebar from "./Sidebar";

const Panel = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="md:w-1/6 md:h-screen">
      <div
        className="block md:hidden cursor-pointer bg-blue-900 p-2 text-white"
        onClick={() => setDrawerOpen(!isDrawerOpen)}
      >
        <IoMdMenu size={30} />
      </div>
      <Sidebar show={isDrawerOpen} />
    </div>
  );
};

export default Panel;
