import { useTheme } from "../contexts/ThemeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ButtonIcon onClick={toggleTheme}>
      {!isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
