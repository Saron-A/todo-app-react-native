import { Stack } from "expo-router";
import { ListContextDefinition } from "../context/ListContextDefinition";

export default function RootLayout() {
  return (
    <ListContextDefinition>
      <Stack
        //hide header globally
        screenOptions={{
          headerShown: false,
        }}
      />
    </ListContextDefinition>
  );
}
