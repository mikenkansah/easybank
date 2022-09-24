import desktop from '../assets/bg-intro-desktop.svg';

const NextGeneration = () => {
  return (
    <section className="flex flex-column px-10 md:flex-row relative">
      <article className="">
        <h1 className="text-6xl inline-block font-normal">Next Generation digital banking</h1>
      </article>
      <div>
        <div className="absolute -mt-10 z-[0]">
            <img className="max-w-[100]"src={desktop} alt="desktop-img"/>
        </div>
      </div>
    </section>
  );
};

export default NextGeneration;
