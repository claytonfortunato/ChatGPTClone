import React from "react";

import * as C from "./styles";

const Translation = () => {
  return (
    <C.Container>
      <textarea className="text-area" cols={55} rows={10}></textarea>
      <C.Button>DO YOU STUFF!</C.Button>
    </C.Container>
  );
};

export default Translation;
