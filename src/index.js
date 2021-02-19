import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import BookList from './BookList';
import Header from './Header';


const App = () => {
  return (
    <div>
      <Header />
      <BookList />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))