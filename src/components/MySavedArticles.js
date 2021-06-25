import React from 'react'
import ArticleCard from './ArticleCard'

export default function MySavedArticles(props) {

    const { mySavedArticles } = props;

    // console.log("What now>", mySavedArticles)
    return (
        <div>

            {
                mySavedArticles.map(article => {
                    return (
                        <div className="oneArticle" key={article.title}>
                            <ArticleCard article={article}></ArticleCard>
                        </div>
                    )
                })
            }

            
        </div>
    )
}