import "./App.css";
import { useState } from "react";

import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";


function App () {

  const [count, setCount] = useState(0);
  const [maxExponent, setMaxExponent] = useState(6);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const renderExponents = (maxExponent) => {
    const exponentComponents = [];
    for (let i = 2; i <= maxExponent; i++) {
      exponentComponents.push(<Exponent key={i} count={count} exponent={i} />);
    }
    return exponentComponents;
  };


  const handleMaxExponentChange = (evt) => {
    const value = parseInt(evt.target.value);
    if (!isNaN(value) && value >= 2) {
      setMaxExponent(value);
    } else if (value < 2) {
      setMaxExponent(2); // Ensure minimum value is 2
    }
  };
  

  return (
    <div className="App">
    <h2><em>Counter</em></h2>
    <Counter count={count} increment={increment} decrement={decrement} />

    <br />
    <h2><em>Exponents</em></h2>

    <label htmlFor="maxExponent">Max Exponent:</label>
        <input
          type="number"
          id="maxExponent"
          value={maxExponent}
          onChange={handleMaxExponentChange}
        />
    <br />
    <br />

    <div className="container">
      {/* We can pass exponents dynamically
       */}
        {renderExponents(maxExponent)} 
      </div>
  </div>
  );
}

export default App;
