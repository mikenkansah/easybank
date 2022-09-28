const Information = ({ img, body, heading }) => {
  return (
    <article>
      <div className="">
        <img className="max-w-[100]" src={img} alt="" />
      </div>
      <h1>{heading}</h1>
      <p>{body}</p>
    </article>
  );
};

export default Information;
