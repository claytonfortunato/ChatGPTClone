import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

import * as C from "./styles";

type generateOption = {
  data: string;
};

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string>("");

  const configuration = new Configuration({
    apiKey: import.meta.env.REACT_APP_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
  };

  return (
    <C.Container>
      <C.Header>Gerar uma imagem usando a API Open AI</C.Header>
      <input
        placeholder="Pesquisar imagem"
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <C.Button onClick={generateImage}>Gerar uma Imagem</C.Button>

      {result.length > 0 ? <img src={result} alt="result" /> : <></>}
    </C.Container>
  );
};

export default App;
