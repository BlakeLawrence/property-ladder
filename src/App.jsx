import { Description } from "./components/Description";
import { Navbar } from "./components/Navbar";
import { Instruction } from "./components/Instructions";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <div className="flex justify-center border border-b-blue-200 border-t-blue-200 p-10">
        <Calculator />
        <Instruction />
      </div>
    </div>
  );
}

export default App;
