import { useContext } from "react";
import { Text, TextInput, View } from "react-native";

import ListContext from "../context/ListContextDefinition.jsx";

const AcceptInput = () => {
  const { input, setInput, taskList, setTaskList } = useContext(ListContext);

  const handleAddTask = () => {
    let newTaskName = input.trim();
    if (!newTaskName) return;
    else {
      let newTask = {
        id: Date.now().toString(),
        task: newTaskName,
        isCompleted: false,
      };

      setTaskList([...taskList, newTask]);
      setInput("");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 16,
            color: "black",
            flex: 1,
            paddingHorizontal: 8,
          }}
          placeholder="Enter a task... "
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={input}
          onChangeText={(text) => setInput(text)}
        />

        <Text
          style={{
            backgroundColor: "lightskyblue",
            color: "white",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 16,
          }}
          onPress={handleAddTask}
        >
          Add Task
        </Text>
      </View>
    </View>
  );
};

export default AcceptInput;
