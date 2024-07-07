import { FaStar } from "react-icons/fa";
import Faq from "./Faq";

function App() {

  return (
    <>
      <div className="w-[450px] shadow-md shadow-black rounded h-full items-center m-auto p-3 px-6">
        <h1 className="text-2xl font-bold flex items-center my-5">
          {" "}
          <FaStar className="text-purple-500 pl-2" size={40} />{" "}
          <span className="pl-5">FAQs</span>
        </h1>
        <Faq
          // key="faq-1"
          question={"What is frontend mentor, and how it will help you?"}
          answer={
            "Frontend Mentor offers realisitic coding challenges to help " +
            " developers improve their frontend coding skills with projects in" +
            "HTML, CSS and javascript. it's suitable for all levels and ideal" +
            "for portfolio building"
          }
        />

        <Faq
          key="faq-2"
          question={"Is Frontend Mentor free?"}
          answer={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
            "Molestiae nostrum doloribus fuga beatae assumenda adipisci" +
            "accusantium laborum odit animi consequatur."
          }
        />

        <Faq
          key="faq-3"
          question={"Can i use Frontend Mentor projects in my portfolio?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
            "Blanditiis iure distinctio incidunt eveniet minima harum."
          }
        />

        <Faq
          key="faq-4"
          question={"How can i get help if i'm stuck on a challenges?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab" +
            "architecto vero nesciunt blanditiis, molestias officia suscipit" +
            "delectus nostrum facilis assumenda aperiam sint. Facere," +
            "molestias."
          }
        />
      </div>
    </>
  );
}

export default App;
