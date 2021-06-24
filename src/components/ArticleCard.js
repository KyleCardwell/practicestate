import React from "react"


export default function ArticleCard(props) {

    const { article } = props;

    return (
        <div>
            <h2>{article.title}</h2>
            <h4>{article.author}</h4>
            <p>{article.text}</p>
        </div>
    )
}