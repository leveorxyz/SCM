import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <FiSun /> : <FiMoon />}
      aria-label="Toggle Theme"
      size="lg"
      colorScheme="gray"
      variant="ghost"
      onClick={toggleColorMode}
    />
  );
};
