import { useState } from "react";
import { Container, Button } from "./components/index";
import { classList } from "./utils";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const hasOperator = (arr, value) => arr.includes(value);
  const checkOperation = (arg) =>
    !isNaN(arg.trim().split(" ")[arg.trim().split(" ").length - 1]) &&
    arg[arg.length - 1] !== "."
      ? true
      : false;

  const canDot = (str) =>
    !str.split(" ")[str.split(" ").length - 1].includes(".") &&
    !/[+/\-*]/.test(str.trim().split(" ")[str.trim().split(" ").length - 1]);
  const calcOperation = (arg) => operations[arg[1]](+arg[0], +arg[2]);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const handleClick = (value) => {
    if (value === "RESET") {
      setDisplayValue("0");
    } else if (value === ".") {
      if (displayValue == "0" || canDot(displayValue)) {
        setDisplayValue(displayValue + "" + value);
      }
    } else if (!isNaN(value)) {
      if (displayValue == "0") {
        setDisplayValue(value);
      } else if (value === "0") {
        if (
          displayValue.split(" ")[displayValue.split(" ").length - 1] !== "0"
        ) {
          setDisplayValue(displayValue + value);
        }
      } else {
        setDisplayValue(displayValue + value);
      }
    } else if (hasOperator(Object.keys(operations), value)) {
      if (
        !/[+/\-*]/.test(displayValue) &&
        displayValue !== 0 &&
        displayValue[displayValue.length - 1] !== "."
      ) {
        setDisplayValue(displayValue + " " + value + " ");
      } else {
        if (checkOperation(displayValue)) {
          setDisplayValue(
            calcOperation(displayValue.split(" ")) + " " + value + " "
          );
        }
      }
    } else if (
      value === "=" &&
      /[+/\-*]/.test(displayValue) &&
      checkOperation(displayValue)
    ) {
      setDisplayValue(calcOperation(displayValue.split(" ")));
    } else if (value === "DEL" && displayValue !== "0") {
      if (("" + displayValue).length === 1) {
        setDisplayValue(("" + displayValue).replace(/.$/, "0"));
      } else {
        setDisplayValue(("" + displayValue).trim().replace(/.$/, ""));
      }
    }
  };
  return (
    <>
      <main className="app-container">
        <Container value={displayValue} />
        <section className="buttons-container">
          <Button
            value={"9"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true})}
          />
          <Button
            value={"8"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"7"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"DEL"}
            handleClick={handleClick}
            classList={classList({ deleteButton: true, basicButton: true })}
          />
          <Button
            value={"4"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"5"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"6"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"+"}
            handleClick={handleClick}
            classList={classList({ opButton: true, basicButton: true })}
          />
          <Button
            value={"1"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"2"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"3"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"-"}
            handleClick={handleClick}
            classList={classList({ opButton: true, basicButton: true })}
          />
          <Button
            value={"."}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"0"}
            handleClick={handleClick}
            classList={classList({ numberButton: true, basicButton: true })}
          />
          <Button
            value={"*"}
            handleClick={handleClick}
            classList={classList({ opButton: true, basicButton: true })}
          />
          <Button
            value={"/"}
            handleClick={handleClick}
            classList={classList({ opButton: true, basicButton: true })}
          />
          <Button
            value={"RESET"}
            handleClick={handleClick}
            classList={classList({ deleteButton: true, bigButton: true})}
          />
          <Button
            value={"="}
            handleClick={handleClick}
            classList={classList({ resultButton: true, bigButton: true })}
          />
        </section>
      </main>
    </>
  );
}

export default App;
