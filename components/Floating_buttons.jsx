import { useRef } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Floating_Buttons = () => {
  const iconRef = useRef(null);

  const toggleTheme = () => {
    iconRef.current.setAttribute("style", "");
  };

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Icon
        ref={iconRef}
        name="dark-mode"
        size={30}
        backgroundColor="lightskyblue"
        width="50"
        borderRadius={50}
        padding="6"
        position="fixed"
        bottom={8}
        right={8}
      />
    </TouchableOpacity>
  );
};

export default Floating_Buttons;
