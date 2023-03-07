import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AlOptions";

const App = (): JSX.Element => {
  console.log(arrayItems);
  return (
    <div>
      <OptionSelection arrayItems={arrayItems} />
    </div>
  );
};

export default App;
