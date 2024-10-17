import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonsContainer";

import Style from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setcalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setcalVal(result);
    }
    // else if (buttonText === "C") {
    //   setcalVal(calVal.length - buttonText);
    // }
    else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <center className={Style.container}>
      <Display displayVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </center>
  );
}

export default App;
