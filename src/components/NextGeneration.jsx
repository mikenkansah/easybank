import desktop from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";
import Button from "./buttons/Button";



const NextGeneration = () => {
  return (
    <section className="flex flex-col-reverse justify-between px-10 md:flex-row relative overflow-hidden">
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
      {/* <div>
         <img src={mockups} alt=""/>
      </div> */}
       <figure>
         <div>
            
         <img className="max-w-[100] absolute md:-mt-80 right-[-17rem] top-0 ml-16 z-[0] " src={desktop} alt="desktop-img" />
         <div className="overflow-none">  
               <img className="max-w-[100] absolute md:-mt-40 right-10 z-[10] " src={mockups} alt="desktop-img" />
         </div>
    
         </div>
       
        
       </figure>
    </section>
  );
};

export default NextGeneration;
