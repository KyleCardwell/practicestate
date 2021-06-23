import React from 'react'
import ArticleCard from './ArticleCard'

export default function MyFeed(props) {

    const { myFeedArticles, saveArticle } = props;

    return (
        <div>

            {
                myFeedArticles.map(article => {
                    return (
                        <div className="oneArticle" key={article.title} name={article.title} >
                            <button onClick={() => {saveArticle(article)}} >Save</button>
                            <ArticleCard article={article}></ArticleCard>
                        </div>
                    )
                })
            }

            
        </div>
    )
}