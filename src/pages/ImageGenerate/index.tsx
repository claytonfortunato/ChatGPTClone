import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

import * as C from "./styles";

const ImageGenerate = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const configuration = new Configuration({
    apiKey: "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",
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

      {result.length > 0 ? (
        <img className="result-image" src={result} alt="result" />
      ) : (
        <></>
      )}
    </C.Container>
  );
};

export default ImageGenerate;
