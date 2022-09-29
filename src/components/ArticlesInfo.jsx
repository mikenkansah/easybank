const Articles = ({ img, body, heading, small }) => {
  return (
    <article className="bg-slate-100">
      <img src={img} alt="" className="w-100 h-auto" />
      <div className="px-6 py-4">
        <small className=" text-light">{small}</small>
        <h4 className="text-2xl hover:text-green-400 cursor-pointer">{heading}</h4>
        <p className="text-light">{body}</p>
      </div>
    </article>
  );
};

export default Articles;
