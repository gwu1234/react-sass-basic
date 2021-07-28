import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      {/* Variable Example */}
      <h1>This line is formated via a selector and sass variable</h1>
     
     {/* Nested Rules */}
     <div id="nested">
        <h3>This is an example of nested rules in sass</h3>
     </div>

     {/* Interpolation Example */}
       <p className="interpolation">an example of included class 'interpolation' </p>

       {/* Function Example */}
       <div id="function">
           <h3>inverted background color via sass colour function</h3>
       </div>

       {/* Mixin Example */}
      <div id="mixin">
      <p>This is a mixin example</p>
      </div>
    </>
  );
}

export default App;
