import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "X",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName) => (
        <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
