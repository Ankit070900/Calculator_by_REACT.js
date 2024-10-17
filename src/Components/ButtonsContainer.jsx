import Style from "./Button.module.css";

function ButtonContainer({ onButtonClick }) {
  // const items = [
  //   "AC",
  //   "+/-",
  //   "%",
  //   "/",
  //   "7",
  //   "8",
  //   "9",
  //   "*",
  //   "4",
  //   "5",
  //   "6",
  //   "-",
  //   "1",
  //   "2",
  //   "3",
  //   "+",
  //   "0",
  //   ".",
  //   "=",
  // ];
  return (
    <div className={Style.btnContainer}>
      {/* {items.map((btn) => (
        <button className={Style.button_s}>{btn}</button>
      ))} */}
      <button className={Style.button_ss} onClick={() => onButtonClick("AC")}>
        AC
      </button>
      {/* <button className={Style.button_s} onClick={() => onButtonClick("C")}>
        C
      </button> */}
      <button className={Style.button_s} onClick={() => onButtonClick("%")}>
        %
      </button>
      <button className={Style.but} onClick={() => onButtonClick("/")}>
        /
      </button>

      <button className={Style.button} onClick={() => onButtonClick("7")}>
        7
      </button>
      <button className={Style.button} onClick={() => onButtonClick("8")}>
        8
      </button>
      <button className={Style.button} onClick={() => onButtonClick("9")}>
        9
      </button>
      <button className={Style.but} onClick={() => onButtonClick("*")}>
        *
      </button>

      <button className={Style.button} onClick={() => onButtonClick("4")}>
        4
      </button>
      <button className={Style.button} onClick={() => onButtonClick("5")}>
        5
      </button>
      <button className={Style.button} onClick={() => onButtonClick("6")}>
        6
      </button>
      <button className={Style.but} onClick={() => onButtonClick("-")}>
        -
      </button>
      <button className={Style.button} onClick={() => onButtonClick("1")}>
        1
      </button>
      <button className={Style.button} onClick={() => onButtonClick("2")}>
        2
      </button>
      <button className={Style.button} onClick={() => onButtonClick("3")}>
        3
      </button>
      <button className={Style.but} onClick={() => onButtonClick("+")}>
        +
      </button>
      <button className={Style.button} onClick={() => onButtonClick("0")}>
        0
      </button>
      <button className={Style.button} onClick={() => onButtonClick(".")}>
        .
      </button>
      <button className={Style.buttons} onClick={() => onButtonClick("=")}>
        =
      </button>
    </div>
  );
}

export default ButtonContainer;
