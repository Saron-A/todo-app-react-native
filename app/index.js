import { View } from "react-native";
import AcceptInput from "../components/AcceptInput.jsx";
import Floating_Buttons from "../components/Floating_buttons.jsx";
import Header from "../components/Header.jsx";
import TaskList from "../components/TaskList.jsx";

const index = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        flex: 1,
        padding: 32,
      }}
    >
      <Header />
      <AcceptInput />
      <TaskList />
      <Floating_Buttons />
    </View>
  );
};

export default index;
