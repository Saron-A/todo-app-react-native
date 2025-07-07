import React, { createContext, useState } from "react";

const ListContext = createContext();
export default ListContext;

const ListContextDefinition = ({ children }) => {
  const [taskList, setTaskList] = useState([
    {
      id: "",
      task: "",
      isCompleted: false,
    },
  ]);
  return (
    <ListContextDefinition.provider value={{ taskList, setTaskList }}>
      {children}
    </ListContextDefinition.provider>
  );
};
