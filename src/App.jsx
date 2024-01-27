import { Description } from "./components/Description";
import { Navbar } from "./components/Navbar";
import { Instruction } from "./components/Instructions";

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <div className="flex justify-between mt-10">
        <Instruction />
      </div>
    </div>
  );
}

export default App;
