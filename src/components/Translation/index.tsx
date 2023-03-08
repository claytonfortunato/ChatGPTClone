import * as C from "./styles";

type Props = {
  result: string;
  doStuff: () => void;
  handleInput: () => void;
  promp: string;
};

const Translation = ({ doStuff, handleInput, result }: Props): JSX.Element => {
  return (
    <C.Container>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={handleInput}
      ></textarea>
      <C.Button onClick={doStuff}>DO YOU STUFF!</C.Button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </C.Container>
  );
};

export default Translation;
