import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const AcceptInput = () => {
  const [input, setInput] = useState("");
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
            borderWidth: 0.5,
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
        >
          Add Task
        </Text>
      </View>
    </View>
  );
};

export default AcceptInput;
