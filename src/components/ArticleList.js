import Article from "./Article"

const ArticleList = ({ArticleArr}) => {
        
return (
  <main>
    {ArticleArr.map((element) => {
      return (
        <Article
          title={element.title}
          date={element.date}
          preview={element.preview}
          key={element.id}
        />
      );
    })}
  </main>
);
}

export default ArticleList