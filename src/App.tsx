import { ChangeEvent, useState } from "react";

import { Configuration, OpenAIApi } from "openai";

import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";

import { arrayItems } from "./AlOptions";

import { chatType } from "./types";

import * as C from "./styles";

type Props = {
  result: string;
  doStuff: () => void;
  handleInput: () => void;
};

const App = ({}: Props): JSX.Element => {
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  // console.log(import.meta.env.REACT_APP_KEY)
  const configuration = new Configuration({
    apiKey: import.meta.env.REACT_APP_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <C.Container>
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation
          doStuff={doStuff}
          handleInput={handleInput}
          result={result}
        />
      )}
    </C.Container>
  );
};

export default App;
