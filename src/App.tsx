import { useState } from "react";
import { FaMinusCircle, FaPlusCircle, FaStar } from "react-icons/fa";

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="w-[450px] shadow-md shadow-black rounded h-full items-center m-auto p-3 px-6">
        <h1 className="text-2xl font-bold flex items-center my-5">
          {" "}
          <FaStar className="text-purple-500" />{" "}
          <span className="pl-5">FAQs</span>
        </h1>
        <div>
          <div className="flex text-purple-950 justify-between">
            <h2 className="text-md font-bold flex-wrap">
              what is frontend mentor, and how it will help you
            </h2>
            <button>
              <FaPlusCircle onClick={() => setShow(true)} />
              <FaMinusCircle onClick={() => setShow(false)} />
            </button>
          </div>
          {show && <p className="my-3 opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a
            dolorum odit blanditiis hic. Mollitia itaque consectetur voluptas
            totam unde iste in cum ratione fugiat dolores repellendus obcaecati
            aliquid dolore porro placeat, perferendis consequuntur commodi
          </p>}
          
        </div>
      </div>
    </>
  );
}

export default App;
