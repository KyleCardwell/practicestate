import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import MyFeed from './components/MyFeed';
import dummyData from './data/dumyData';
import NavBar from './components/NavBar';


function App() {

const [ myFeedArticles, setMyFeedArticles ] = useState(dummyData)
const  [mySavedArticles, setMySavedArticles ] = useState([])

const saveArticle = (article) => {
  setMySavedArticles([...mySavedArticles, article])
  console.log(mySavedArticles)
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
        <MyFeed mySavedArticles={mySavedArticles}></MyFeed>
      </Route>
      
    </div>
  );
}

export default App;
