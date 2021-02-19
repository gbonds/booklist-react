import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

const allBooks = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._AC_SX184_.jpg',
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    link: 'https://www.amazon.com/dp/0525536299/ref=s9_acsd_al_bw_c2_x_4_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=E26X16GEF8X04KBVRHWQ&pf_rd_t=101&pf_rd_p=88f041b6-8e04-4c3f-b6e1-6f3446fa666e&pf_rd_i=549028'
  },

  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg',
    title: 'The Four Winds',
    author: 'Kristen Hannah',
    link: 'https://www.amazon.com/dp/1250178606/ref=s9_acsd_al_bw_c2_x_0_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=E26X16GEF8X04KBVRHWQ&pf_rd_t=101&pf_rd_p=88f041b6-8e04-4c3f-b6e1-6f3446fa666e&pf_rd_i=549028'
  },

  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Ifl1zXhJL._AC_SX184_.jpg',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    link: 'https://www.amazon.com/dp/0525559477/ref=s9_acsd_al_bw_c2_x_2_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=E26X16GEF8X04KBVRHWQ&pf_rd_t=101&pf_rd_p=88f041b6-8e04-4c3f-b6e1-6f3446fa666e&pf_rd_i=549028'
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
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('i have been clicked')
  }

  return (
    <article
      className="Book"
      onMouseOver={() => {
        {/* TODO add styles on hover */ }
      }}
    >
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Add to Cart</button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))