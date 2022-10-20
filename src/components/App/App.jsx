import { useState } from "react";
import { Header } from "../modules/Header/Header";
/* import { Button } from "../shared/Button/Button";
import { Checkbox } from "../shared/Checkbox/Checkbox";
import { Dropdown } from "../shared/Dropdown/Dropdown";
import { Input } from "../shared/Input/Input";
import { Radio } from "../shared/Radio/Radio"; */

export const App = () => {
  /*   const [inputValue, setInputValue] = useState("");
  
  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleClearValue = () => {
    setInputValue("");
  }; */

  const [isOpenThemeSwitcher, setIsOpenThemeSwitcher] = useState(false);
  const handleThemeSwitcherClick = () => {
    setIsOpenThemeSwitcher(!isOpenThemeSwitcher);
  };
  return (
    <Header onClick={handleThemeSwitcherClick} isOpen={isOpenThemeSwitcher} />
  );
};
