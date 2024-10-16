import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor: React.FC = () => {
  const [language, setLanguage] = useState('java');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="p-4 border rounded bg-gray-50 h-full flex flex-col">
      <div className="mb-2">
        <label className="mr-2">Select Language:</label>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border rounded"
        >
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="c_cpp">C</option>
        </select>
      </div>
      <div className="flex-1">
        <AceEditor
          mode={language}
          theme="monokai"
          name="code_editor"
          width="100%"
          height="100%"
          fontSize={18}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
