const Articles = ({ img, body, heading, small }) => {
  return (
    <article className="bg-slate-100">
      <img src={img} alt="" />
      <div className="px-6 py-4">
        <small>{small}</small>
        <h4>{heading}</h4>
        <p>{body}</p>
      </div>
    </article>
  );
};

export default Articles;
