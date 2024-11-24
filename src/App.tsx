import { Headers } from "./modules/header/components/headers";
import { Heros } from "./modules/hero/components/hero";
import { Selecting } from "./modules/selecting/components/selects";

function App() {
  return (
    <div className="App">
      <Headers />
      <Heros />
      <Selecting />
    </div>
  );
}

export default App;
