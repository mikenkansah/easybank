import desktop from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";
import Button from "./buttons/Button";



const NextGeneration = () => {
  return (
    <section className="flex flex-col-reverse px-10 md:flex-row relative">
       <article className="pb-[5rem]">
         <h1 className="text-[5rem] inline-block font-bold mb-4 mt-[10rem]">
          Next Generation <br></br> digital banking
         </h1>
            <p className="font-normal text-[1.2rem] mb-5 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Voluptatum nisi expedita explicabo ad fdfdffdf.<br></br> Facilis veritatis dolores nisi
          nihil assumenda!
            </p>
         <Button/>
      </article>
       <figure>
           <div className="absolute md:-mt-80 right-0 top-0 ml-16 z-[0]">
              <img className="max-w-[100]" src={desktop} alt="desktop-img" />
           </div>
           <div className="absolute  right-10 z-[10] md:-mt-32">
              <img className="max-w-[100]" src={mockups} alt="desktop-img" />
           </div>
       </figure>
    </section>
  );
};

export default NextGeneration;
