import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

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

  // Load tasks from AsyncStorage when the app starts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await AsyncStorage.getItem("taskList");
        if (data !== null) {
          setTaskListState(JSON.parse(data));
        }
      } catch (e) {
        console.error("Failed to load tasks", e);
      }
    };

    loadTasks();
  }, []);
  return (
    <ListContext.Provider value={{ input, setInput, taskList, setTaskList }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContextDefinition };
