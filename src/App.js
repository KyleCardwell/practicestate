import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import MyFeed from './components/MyFeed';
import dummyData from './data/dumyData';
import NavBar from './components/NavBar';
import MySavedArticles from './components/MySavedArticles';


function App() {

const [ myFeedArticles, setMyFeedArticles ] = useState(dummyData)
const [mySavedArticles, setMySavedArticles ] = useState([])

const saveArticle = (article) => {

  const filteredArticles = mySavedArticles.filter(savedArticle => savedArticle.title === article.title)

  if (filteredArticles.length === 0) {
    setMySavedArticles([...mySavedArticles, article])
  }
}

  return (
    <div className="App">
      <NavBar></NavBar>

      <Route path="/myFeed">
        <MyFeed 
          myFeedArticles={myFeedArticles}
          saveArticle={saveArticle}
        />
      </Route>

      <Route path="/mySavedArticles">
        <MySavedArticles
          mySavedArticles={mySavedArticles}    
        />
      </Route>
      
    </div>
  );
}

export default App;
