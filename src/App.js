import React, {useState} from 'react';
import { marked } from 'marked';
import './App.css';

function App() {

  const [ texte, setTexte ] = useState('# `Prévisualisateur - Markdown`\n### Ce projet a été réalisé avec React ;)\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Alex](https://github.com/Alexandre-Marchand)');

  const changeTextHandler = (event) => {
    setTexte(event.target.value);
    console.log(marked(texte));
  };

  const mardownToHmtl = () => {
    return {__html: marked(texte)}
  }

  return (
    <div className="App">
      <div className='elements'>

        <div className="element">
          <textarea
            rows="30" 
            value={texte}
            onChange={(e) => changeTextHandler(e)}>
            </textarea>
        </div>
          
        <div className="element">
          <div dangerouslySetInnerHTML={mardownToHmtl()}></div>
        </div>
          
          
      </div>
    </div>
  );
}

export default App;
