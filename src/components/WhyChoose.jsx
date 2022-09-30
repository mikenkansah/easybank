import Information from "./Information";
import info from "./Info";

const WhyChoose = () => {
  return (
    <section className="bg-slate-100 px-10 py-[7rem] ">
      <article className="mb-16">
        <h1 className="text-4xl font-semibold pb-5">Why Choose EasyBank?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minus
          <br></br> nesciunt quam tenr cumque iure!
        </p>
      </article>
      <div className="flex flex-col md:flex-row justify-center align-middle">
        {info.map((infos) => {
          return (
            <Information
              key={infos.id}
              img={infos.img}
              heading={infos.heading}
              body={infos.body}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;
