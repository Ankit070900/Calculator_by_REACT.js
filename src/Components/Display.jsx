import Style from "./Display.module.css";

function Display({ displayVal }) {
  return (
    <input type="text" className={Style.display} value={displayVal} readOnly />
  );
}

export default Display;
