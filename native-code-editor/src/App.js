import './App.css';
import { useEffect, useState } from 'react';

import SplitPane from "react-split-pane";
import {HtmlEditor, CssEditor, JavascriptEditor} from "./components/Editors"

function App() {

  const [heightValue, setHeightValue] = useState("485px");

  const [htmlValue, setHtmlValue] = useState('');
  const [cssValue, setCssValue] = useState('');
  const [jsValue, setJsValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  useEffect(()=>{
    const output = `
    <html>
      <style>${cssValue}</style>
      <body>
      ${htmlValue}
        <script text="text/javascript">
          ${jsValue}
        </script>
      </body>
    </html>
    `;
    setOutputValue(output)
  }, [htmlValue, cssValue, jsValue]);


  return (
    <SplitPane 
    split="horizontal" 
    minSize={"50%"}
    onDragFinished={(height) => {
      setHeightValue(`${height - 40}px`);
    }}
    >
      <SplitPane split="vertical" minSize={"33%"}>
        <HtmlEditor height={heightValue} value={htmlValue} onChange={setHtmlValue}/>
        <SplitPane split="vertical" minSize={"50%"}>
        <CssEditor height={heightValue} value={cssValue} onChange={setCssValue}/>
        <JavascriptEditor height={heightValue} value={jsValue} onChange={setJsValue}/>
        </SplitPane>
      </SplitPane>
      <iframe srcDoc={outputValue} className="previewIFrame"/>
    </SplitPane>
  );
}

export default App;
