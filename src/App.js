import React, { useRef } from 'react';
import './App.css';
import { ReactToPrint } from 'react-to-print';

function App() {
  const componentRef = useRef(null);

  return (
    <div className="App">
      <ReactToPrint
        trigger={() => {
          return <button>Print the table</button>;
        }}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <p style={{fontSize:'10px', margin:'0px'}}>Hello</p>
        <p style={{fontSize:'50px', margin:'0px'}}>Hello</p>
        <p style={{fontSize:'10px', margin:'0px'}}>Hello</p>
        <table border="1">
          <thead>
            <tr>
              <th>Month</th>
              <th>Product A</th>
              <th>Product B</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>100</td>
              <td>150</td>
              <td>250</td>
            </tr>
            <tr>
              <td>February</td>
              <td>120</td>
              <td>130</td>
              <td>250</td>
            </tr>
            <tr>
              <td>March</td>
              <td>140</td>
              <td>110</td>
              <td>250</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>360</td>
              <td>390</td>
              <td>750</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
