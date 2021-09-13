import React from 'react';
import articleContent from './article-content';
import { Link } from 'react-router-dom';

const ArticlesList = () => (
  <>
    <h1>Articles List</h1>
    {articleContent.map((article, i) => (
      <Link className="article-list-item" to={`/article/${article.name}`} key={i}>
        <h3>{article.title}</h3>
        <p>{article.content[i].substring(0,150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;