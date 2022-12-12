import React, { useState } from 'react';
import translit from 'iso_9';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

  function App() {
    const [direction, setDirection] = useState(true);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const handleInputChange = event => {
      setInput(event.target.value);
      setOutput(translit(event.target.value, direction ? 1 : -1))
    }

    const handleDirectionChange = event => {
      console.log("set direction: " + event.target.checked)
      var tmp = output
      setOutput(translit(input, event.target.checked ? 1 : -1))
      setInput(tmp)
      setDirection(event.target.checked)
    }
    return (
      <div className="App">
        <div className="flex flex-col h-screen justify-between">
        <header>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Transliterate between Cyrillic and Latin script</h1>
      </header>
          <main className="mb-auto" >
            <div >
              <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" label="Text to transliterate" variant="outlined" onCopy={handleInputChange} onCut={handleInputChange} onPaste={handleInputChange} onChange={handleInputChange} value={input} placeholder={"Paste or type some " + (direction ? "Cyrillic" : "Latin") + " here to get started..."}/>
          </div>
          <div>
          <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" label="Result" variant="outlined" value={output} inputProps={{readOnly: true}} placeholder="The result will appear here"/>
          </div>
            <FormControlLabel control={<Switch defaultTrue checked={direction} onChange={handleDirectionChange}/>} label={direction ? "Cyrillic -> Latin" : "Latin -> Cyrillic"} />
          </main>
          <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 text-sm">Created by VOIDSTAR Ab. <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => window.location = 'mailto:info@voidstar.online'}>Contact us</button>. This site does not use cookies. It does not store any information. Provided as is.</footer>
      </div>
      </div>
    );
}

export default App;
