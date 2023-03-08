import React from "react";

import * as C from "./styles";

type Props = {
  doStuff: () => void;
  setInput: () => void;
};

const Translation = ({ doStuff, setInput }: Props) => {
  return (
    <C.Container>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <C.Button onClick={doStuff}>DO YOU STUFF!</C.Button>
    </C.Container>
  );
};

export default Translation;
