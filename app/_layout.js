import { Stack } from "expo-router";
import { ListContextDefinition } from "../context/ListContextDefinition";
import index from "./index.js";

export default function RootLayout() {
  return (
    <ListContextDefinition>
      <Stack />
    </ListContextDefinition>
  );
}
