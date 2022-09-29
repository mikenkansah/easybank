const Articles = ({ img, body, heading, small }) => {
  return (
    <article className="">
      <img src={img} alt="" />
      <small>{small}</small>
      <h4>{heading}</h4>
      <p>{body}</p>
    </article>
  );
};

export default Articles;
