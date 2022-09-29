import ArticlesInfo from './ArticlesInfo';
import {infoarticles} from './Info';


const LatestArticles = () => {
  return (
    <section className="px-10 py-20">
      <h1 className="text-4xl text-bold pb-10">Latest Articles</h1>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {infoarticles.map((article) => {
            return (
                <ArticlesInfo key={article.id} img={article.img} small={article.small} body={article.body} heading={article.heading}/>
            )
        })}
 
        
      </div>
    </section>
  );
};

export default LatestArticles;
