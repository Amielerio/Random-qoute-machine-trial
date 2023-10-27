import { useState } from 'react'
import './App.css'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import qoutes from "./assets/quotes.json";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
return qoutes[Math.floor(Math.random()* qoutes.length)];
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 111);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const ChangeQoute = () => {
    setQuote(getRandomQuote())
    setRandomColor(getRandomColor())
  }

  const transition = "all 1s";

  return (
    <div id="background" style = {{backgroundColor: randomColor, transition}}>
    <div id="quote-box">
      <div className="quote-content" style = {{ color: randomColor, transition}}>
      <h2 id="text">
      <FaQuoteLeft size="30" style={{ marginRight: "10px"}} />
        {quote.quote}
      <FaQuoteRight size="30" style={{ marginLeft: "10px"}} />
        </h2>
      <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a href="twitter.com/intent/tweet"
        id="tweet-qoute"
        style = {{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition,
          }}>
          <FaTwitter color="white"/>
        </a>
        <button id="new-qoute" onClick={ChangeQoute} style = {{backgroundColor: randomColor, transition}}>
          Change Qoute
        </button>
      </div>
      </div>
    </div>
  )
}

export default App
