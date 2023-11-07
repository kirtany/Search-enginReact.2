
import './App.css'; 
import Search from "./Search"
import "./Search.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="./" target="_blank">
            Kirtanya Bhagwandin
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kirtany/Search-enginReact"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="./"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
  </div>
  );
}
