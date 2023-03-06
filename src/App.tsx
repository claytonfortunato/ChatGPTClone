import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

import * as C from "./styles";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.REACT_APP_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 1,
      size: "1024x1024",
    });

    console.log(res.data.data[0].url);
  };

  return (
    <C.Container>
      <C.Header>Gerar uma imagem usando a API Open AI</C.Header>
      <input type="text" />
      <C.Button onClick={generateImage}>Gerar uma Imagem</C.Button>
    </C.Container>
  );
};

export default App;
