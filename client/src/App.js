import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

// import {BrowserRouter as Router} from "react-router-dom";
import {Route, Link} from 'react-router-dom';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [select, setSelect] = useState(' ');

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

        <Route exact path="/" render={props =>
          <MovieList
          {...props}
          select ={select}
          setSelect = {setSelect}

          />}
        />

        <Route path= "/movies/:id" render={props =>
          <Movie
            {...props}
            select={select}
          />}
        />


    </div>
  );
};

export default App;
