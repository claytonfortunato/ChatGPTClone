import { useState } from "react";

import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";

import { arrayItems } from "./AlOptions";

import * as C from "./styles";

const App = (): JSX.Element => {
  const [option, setOption] = useState({});
  // console.log(import.meta.env.REACT_APP_KEY)

  const selectOption = (option) => {
    setOption(option);
  };

  console.log(Object.values(option).length);
  return (
    <C.Container>
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation />
      )}
    </C.Container>
  );
};

export default App;
