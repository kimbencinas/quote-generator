import React, { useState, useEffect } from 'react'
import Quotes from './Components/Quotes'
import Button from './Components/Button'
import './App.css'

export default function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch('https://zenquotes.io/api/random')
      .then(response => response.json())
      .then((data) => {
        setQuote(data[0].q);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="content-container">
          <Quotes quote={quote} />
          <Button getQuote={getQuote} />
        </div>
      </div>
    </div>
  )
}