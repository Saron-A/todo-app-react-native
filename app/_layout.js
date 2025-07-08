import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { ListContextDefinition } from "../context/ListContextDefinition";

export default function RootLayout() {
  return (
    <PaperProvider>
      <ListContextDefinition>
        <Stack
          //hide header globally
          screenOptions={{
            headerShown: false,
          }}
        />
      </ListContextDefinition>
    </PaperProvider>
  );
}
