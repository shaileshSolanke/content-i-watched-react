import React, { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { Output } from "./components/Output";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";

import "./styles/App.module.css";

function App() {
  const contentLink = "https://shaileshsolanke.github.io/data/content.json";

  const [content, setContent] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    fetch(contentLink)
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error fetching contentData:", error));
  }, []);

  function findMatches(wordToMatch, content) {
    return content.filter((c) => {
      const regex = new RegExp(wordToMatch, "gi");
      return c.name.match(regex) || c.year.match(regex);
    });
  }

  function getInput(inputValue) {
    setInput(inputValue);
    setOutput(findMatches(inputValue, content));
  }

  return (
    <React.Fragment>
      <Container>
        <Input getInput={getInput} />
        <Output output={output} input={input} />
      </Container>
     {input.length===0 && <Footer contentCount={content.length}/>}
    </React.Fragment>
  );
}
export default App;
