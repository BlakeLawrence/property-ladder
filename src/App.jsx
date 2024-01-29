import { Description } from "./components/Description";
import { Navbar } from "./components/Navbar";
import { Instruction } from "./components/Instructions";
import { Calculator } from "./components/Calculator";
import { Results } from "./components/Results";
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
      <Navbar stampDuty={stampDuty} />
      <Description stampDuty={stampDuty} />
      <div className="flex flex-col md:flex-row justify-center border border-b-blue-200 border-t-blue-200 p-5 lg:p-10">
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

        <div className={stampDuty <= 0 ? "hidden" : "absolute shadow-2xl"}>
          <Results
            buyerStatus={buyerStatus}
            setStampDuty={setStampDuty}
            stampDuty={stampDuty}
            setPrice={setPrice}
            price={price}
          />
        </div>

        <Instruction stampDuty={stampDuty} />
      </div>
    </div>
  );
}

export default App;
