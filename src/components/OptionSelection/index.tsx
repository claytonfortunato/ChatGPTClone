import * as C from "./styles";

export default function OptionSelection({ arrayItems }) {
  return (
    <C.Container>
      <h1>ChatGPT Clone</h1>

      <C.Grid>
        {arrayItems.map((item) => {
          return (
            <C.Child>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </C.Child>
          );
        })}
      </C.Grid>
    </C.Container>
  );
}
