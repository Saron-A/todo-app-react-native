import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListContext = createContext();
export default ListContext;

const ListContextDefinition = ({ children }) => {
  const [input, setInput] = useState("");
  const [taskList, setTaskListState] = useState([]);

  const setTaskList = async (newList) => {
    setTaskListState(newList);

    try {
      AsyncStorage.setItem("taskList", JSON.stringify(newList));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ListContext.Provider value={{ input, setInput, taskList, setTaskList }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContextDefinition };
