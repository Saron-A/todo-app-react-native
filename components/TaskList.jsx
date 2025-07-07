import { useContext } from "react";
import { Text, View } from "react-native";
import ListContext from "../context/ListContextDefinition.jsx";

const TaskList = () => {
  const { taskList, setTaskList } = useContext(ListContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {taskList.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            fontSize: "25",
            fontWeight: "100",
            fontStyle: "italic",
            paddingVertical: 80,
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
            color: "gray",
          }}
        >
          No Tasks yet
        </Text>
      ) : (
        taskList.map((task, index) => (
          <View
            key={task.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
              borderWidth: 0.3,
              borderRadius: 32,
            }}
          >
            <Text>{task.task}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <Text>📝</Text>
              <Text>🗑️</Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default TaskList;
