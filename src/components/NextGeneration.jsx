import desktop from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";
import Button from "./buttons/Button";


const NextGeneration = () => {
  return (
    <section className="flex flex-col px-10 md:flex-row relative">
       <article className="">
         <h1 className="text-[70px] inline-block font-bold  mt-[10rem]">
          Next Generation <br></br>
         </h1>
            <p className="font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Voluptatum nisi expedita explicabo ad. Facilis veritatis dolores nisi
          nihil assumenda! Dolores!
            </p>
         <Button/>
      </article>
       <figure>
           <div className="absolute md:-mt-52   z-[0]">
              <img className="max-w-[100]" src={desktop} alt="desktop-img" />
           </div>
           <div className="absolute right-10 z-[10] md:-mt-32">
              <img className="max-w-[100]" src={mockups} alt="desktop-img" />
           </div>
       </figure>
    </section>
  );
};

export default NextGeneration;
