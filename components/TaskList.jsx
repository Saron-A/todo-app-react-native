import { useContext } from "react";
import { Text, View } from "react-native";
import ListContext from "../context/ListContextDefinition.jsx";

const TaskList = () => {
  const { taskList, setTaskList } = useContext(ListContext);
  return (
    <View>
      {taskList.length === 0 ? (
        <Text>No Tasks yet</Text>
      ) : (
        taskList.map((task, index) => (
          <View key={task.id}>
            <Text>{task.task}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default TaskList;
