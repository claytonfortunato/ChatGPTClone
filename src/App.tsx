import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AlOptions";

const App = (): JSX.Element => {
  console.log(arrayItems);
  return (
    <div>
      <OptionSelection />
    </div>
  );
};

export default App;
