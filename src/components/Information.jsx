const Information = ({ img, body, heading }) => {
  return (
    <article>
      <div className="pb-5">
        <img className="max-w-[100]" src={img} alt="" />
      </div>
      <h1 className="pb-5 text-bold text-2xl">{heading}</h1>
      <p>{body}</p>
    </article>
  );
};

export default Information;
