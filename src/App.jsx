import { Description } from "./components/Description";
import { Navbar } from "./components/Navbar";
import { Instruction } from "./components/Instructions";
import { Calculator } from "./components/Calculator";
import { useState } from "react";
import {
  currency,
  firstTimeBuyerRate,
  nextTimeBuyerRate,
  additionalBuyerRate,
} from "./helpers/helpers";

function App() {
  //States
  const [buyerStatus, setBuyerStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [stampDuty, setStampDuty] = useState(0);

  const calculateFirst = () => {
    setStampDuty(currency(firstTimeBuyerRate(price)));
  };
  const calculateNext = () => {
    setStampDuty(currency(nextTimeBuyerRate(price)));
  };
  const calculateAdditional = () => {
    setStampDuty(currency(additionalBuyerRate(price)));
  };

  return (
    <div>
      <Navbar />
      <Description />
      <div className="flex justify-center border border-b-blue-200 border-t-blue-200 p-10">
        <Calculator
          price={price}
          setPrice={setPrice}
          buyerStatus={buyerStatus}
          setBuyerStatus={setBuyerStatus}
          calculateFirst={calculateFirst}
          calculateNext={calculateNext}
          calculateAdditional={calculateAdditional}
          stampDuty={stampDuty}
          currency={currency}
        />
        <Instruction />
      </div>
    </div>
  );
}

export default App;
