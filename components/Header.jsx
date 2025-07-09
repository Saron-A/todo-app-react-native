import { Text, View } from "react-native";
// Ayyy
const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 32,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 24,
          padding: 8,
        }}
      >
        TODO Daily
      </Text>
      <Text
        style={{
          fontWeight: "200",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Tackle daily tasks, one at a time!
      </Text>
    </View>
  );
};

export default Header;
