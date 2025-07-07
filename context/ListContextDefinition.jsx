import { createContext, useState } from "react";

const ListContext = createContext();
export default ListContext;

const ListContextDefinition = ({ children }) => {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <ListContext.Provider value={{ input, setInput, taskList, setTaskList }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContextDefinition };
