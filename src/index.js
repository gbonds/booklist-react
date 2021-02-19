import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

const allBooks = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._AC_SX184_.jpg',
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    id: 1
  },

  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg',
    title: 'The Four Winds',
    author: 'Kristen Hannah',
    id: 2
  },

  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Ifl1zXhJL._AC_SX184_.jpg',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    id: 3
  }
]

const BookList = () => {
  return (
    <section className="BookList">
      {allBooks.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
          // spread operator '...' breaks out all the props
        )
      })}
    </section>
  )
}

const Book = ({ image, title, author }) => {

  return (
    <article className="Book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))