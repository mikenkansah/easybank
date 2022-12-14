import desktop from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";
import Button from "./buttons/Button";


const NextGeneration = () => {
  return (
    <section className="flex flex-col-reverse justify-between px-10 relative overflow-hidden">
       <article className="pb-[5rem]">
         <h1 className="md:text-[5rem] text-[2rem] inline-block font-bold mb-4 mt-[10rem]">
          Next Generation <br></br> digital banking
         </h1>
            <p className="font-normal text-[1.2rem] mb-5 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Voluptatum nisi expedita explicabo ad fdfdffdf.<br></br> Facilis veritatis dolores nisi
          nihil assumenda!
            </p>
         <Button name="Request Invite"/>
      </article>
       <figure>
         <img className="max-w-[100] md:absolute md:-mt-80 md:right-[-17rem] md:top-0 ml-16 z-[0] " src={desktop} alt="desktop-img" />
         <img className="max-w-[100] md:absolute md:-mt-40 -mt-60 md:right-10 z-[10] " src={mockups} alt="desktop-img" />
 
       </figure>
    </section>
  );
};

export default NextGeneration;
