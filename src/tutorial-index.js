import React from 'react';
// if dependency listed in node modules, don't need to include full file path
import ReactDom from 'react-dom';
// this imports the render method


const Greeting = () => {
  // this is a stateless functional component
  // function name must start with capitalized first letter so React knows it's a component
  // can also use function FunctionName(parameters){}
  
  // return <h4>Hello. This is Grace and this is my first component.</h4>;
  // you ALWAYS need to return something in this component, even if it's an empty HTML element.

  //return React.createElement('h1', {}, 'Hello world');

  return (
    // you can only return one element, so it's best to wrap entire content in div. can use React.Fragment instead of div, most commonly if you want to avoid extra div added to your final markup.
    // best to use parantheses around return content so that it's grouped together even if on multiple lines.
  <div>
    <Message />
  </div>
  );
}

const Message = () => {
  return (
    <p>Hello there, <strong><Person /></strong>.</p>
  )
}

const Person = () => {
  return (
    'John Doe'
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));
// all components like <Greeting /> must include self-closing tag in order for it to be recognized