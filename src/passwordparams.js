import { useState } from "react";
import "./app.css";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const SPECIAL_LETTERS = "~!@#$%^&*";
const PasswordParams = () => {
  const [password, updatePassword] = useState("");
  const [length, updateLength] = useState(5);
  const [special, updateSpecial] = useState(false);
  const [upperCase, updateUpperCase] = useState(false);

  const passwordGeneratefunction = () => {
    let Password = "";
    let check = Math.floor(Math.random() * 5);
    const LETTERSLength = LETTERS.length;
    const SPECIAL_LETTERSLength = SPECIAL_LETTERS.length;

    for (let i = 0; i < length; i++) {
      Password += LETTERS.charAt(Math.floor(Math.random() * LETTERSLength));

      for (let j = 0; j < Password.length; j++) {
        var randomLetters = Password.charAt(
          Math.floor(Math.random() * Password.length)
        );
      }
      for (let j = 0; j < Password.length; j++) {
        var randomCapitalLetters = Password.charAt(
          Math.floor(Math.random() * Password.length)
        );
      }

      if (
        Password.match(/[a-z]/i) &&
        check > 0 &&
        special === true &&
        upperCase === true
      ) {
        for (let l = 0; l < length; l++)
          var passwordspecial = SPECIAL_LETTERS.charAt(
            Math.floor(Math.random() * SPECIAL_LETTERSLength)
          );
        Password = Password.replace(randomLetters, passwordspecial);

        Password = Password.replace(
          randomCapitalLetters,
          randomLetters.toUpperCase()
        );
        check--;
      } else if (Password.match(/[a-z]/i) && check > 0 && upperCase === true) {
        Password = Password.replace(randomLetters, randomLetters.toUpperCase());
      } else if (Password.match(/[a-z]/i) && check > 0 && special === true) {
        for (let m = 0; m < length; m++)
          var passwordspecial = SPECIAL_LETTERS.charAt(
            Math.floor(Math.random() * SPECIAL_LETTERSLength)
          );
        Password = Password.replace(randomLetters, passwordspecial);
      }
    }

    updatePassword(Password);
  };
  return (
    <div>
      <h1 className="password">{password}</h1>
      <div className="centerDiv">
        <input
          min={5}
          max={10}
          type="number"
          value={length}
          onChange={(e) => updateLength(e.target.value)}
          className="centerInput"
        />
      </div>
      <div className="centerDiv">
        <h2>UpperCase</h2>
        <input
          type="checkbox"
          onClick={(e) => updateUpperCase(true)}
          className="centerInput"
        />
      </div>
      <div className="centerDiv">
        <h2>SpecialCharacter</h2>
        <input
          type="checkbox"
          onClick={(e) => updateSpecial(true)}
          className="centerInput"
        />
      </div>
      <button onClick={passwordGeneratefunction} className="generatebutton">
        Generate Password
      </button>
    </div>
  );
};
export default PasswordParams;
