import desktop from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";

const NextGeneration = () => {
  return (
    <section className="flex flex-col px-10 md:flex-row relative">
      <article className="">
        <h1 className="text-6xl inline-block font-normal">
          Next Generation <br></br>digital banking
        </h1>
        <p className="font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Voluptatum nisi expedita explicabo ad. Facilis veritatis dolores nisi
          nihil assumenda! Dolores!
        </p>
      </article>
      <div>
        <div className="absolute md:-mt-52   z-[0]">
          <img className="max-w-[100]" src={desktop} alt="desktop-img" />
        </div>
        <div className="absolute z-[10] md:-mt-52">
          <img className="max-w-[100]" src={mockups} alt="desktop-img" />
        </div>
      </div>
    </section>
  );
};

export default NextGeneration;
