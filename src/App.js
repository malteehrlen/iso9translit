import React, { useState } from 'react';
import translit from 'iso_9';

  function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const handleInputChange = event => {
      setInput(event.target.value);
    }

    const transliterate = event => {
      setOutput(translit(input, 1));
    }
    return (
      <div className="App">
        <div className="flex flex-col h-screen justify-between">
        <header>
          <h1>Transliterate from Cyrillic to Latin script</h1>
      </header>
          <main className="mb-auto" >
            <div >
          <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" label="Text to transliterate" variant="outlined" onChange={handleInputChange} placeholder="input..."/>
          </div>
          <div>
          <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" label="Result" variant="outlined" value={output} inputProps={{readOnly: true}} placeholder="click transliterate to see results"/>
          </div>
          <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={transliterate}>Transliterate</button>
          </div>
          </main>
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 text-sm">This tool was written by Malte Ehrlen (malte@ehrlen.com https://github.com/malteehrlen) to be simple and helpful. It does not use cookies. It does not store any information. Provided as is.</footer>
    </div>
    </div>
  );
}

export default App;
