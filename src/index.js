import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

const allBooks = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._AC_SX184_.jpg',
    title: 'The Vanishing Half',
    author: 'Brit Bennett'
  },

  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg',
    title: 'The Four Winds',
    author: 'Kristen Hannah'
  }
]

// JUST TESTING, WILL UPDATE TO USE BOOK ARRAY
const allNames = ['jon', 'nancy', 'bob']
const newNames = allNames.map((name) => {
  return <h1>{name}</h1>
})

const BookList = () => {
  return (
    <section className="BookList">
      {allNames}
    </section>
  )
}

const Book = (props) => {

  console.log(props)

  return (
    <article className="Book">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))