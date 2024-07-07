import { useState } from "react";
import { FaMinusCircle, FaPlusCircle, FaStar } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-[450px] shadow-md shadow-black rounded h-full items-center m-auto p-3 px-6">
        <h1 className="text-2xl font-bold flex items-center my-5">
          {" "}
          <FaStar className="text-purple-500" />{" "}
          <span className="pl-5">FAQs</span>
        </h1>
        <div className="hover:shadow-md p-3 rounded-md">
          <div className="flex text-purple-950 justify-between">
            <h2 className="text-md font-bold flex-wrap">
              What is frontend mentor, and how it will help you
            </h2>
            <button>
              <FaPlusCircle onClick={() => setShow(!show)} />
            </button>
          </div>
          {!show && (
            <p className="my-3 opacity-60">
              Frontend Mentor offers realisitic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and javascript. it's suitable for all levels and ideal for portfolio building 
            </p>
          )}
        </div>
        <div className="hover:shadow-md p-3 rounded-md">
          <div className="flex text-purple-950 justify-between">
            <h2 className="text-md font-bold flex-wrap">
              Is Frontend Mentor free ?
            </h2>
            <button>
              <FaPlusCircle onClick={() => setShow(!show)} />
            </button>
          </div>
          {!show && (
            <p className="my-3 opacity-60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum doloribus fuga beatae assumenda adipisci accusantium laborum odit animi consequatur.
            </p>
          )}
        </div>
        <div className="hover:shadow-md p-3 rounded-md">
          <div className="flex text-purple-950 justify-between">
            <h2 className="text-md font-bold flex-wrap">
              Can i use Frontend Mentor projects in my portfolio ?
            </h2>
            <button>
              <FaPlusCircle onClick={() => setShow(!show)} />
            </button>
          </div>
          {!show && (
            <p className="my-3 opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure distinctio incidunt eveniet minima harum.
            </p>
          )}
        </div>
        <div className="hover:shadow-md p-3 rounded-md">
          <div className="flex text-purple-950 justify-between">
            <h2 className="text-md font-bold flex-wrap">
              How can i get help if i'm stuck on a challenges
            </h2>
            <button>
              <FaPlusCircle onClick={() => setShow(!show)} />
            </button>
          </div>
          {!show && (
            <p className="my-3 opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab architecto vero nesciunt blanditiis, molestias officia suscipit delectus nostrum facilis assumenda aperiam sint. Facere, molestias.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
