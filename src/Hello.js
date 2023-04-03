import './hello.css';
import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div className="Hello" >
        <h1>Hello World!</h1>
        <p>My first React Component ;)</p>
      </div>
    );
  }
}

export default Hello;
