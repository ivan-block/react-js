import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

function Book() {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

function Image() {
  return (
    <img width={300} src='https://s.catch.com.au/images/product/0061/61001/61ad8752e6146275217490.jpg' alt='' />
  )
}

function Title() {
  return (
    <h1>Love is in the wind</h1>
  )
}

function Author() {
  return (
    <h4 style={{color: "#ecf0f1", marginTop: "1rem"}}>Ivan Agwuye</h4>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookList />
);