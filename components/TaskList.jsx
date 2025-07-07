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
        gap: 24,
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

              borderRadius: 32,
              shadowOffset: { width: 1, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              shadowRadius: 4,
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
              }}
            >
              {task.task}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <Text
                style={{
                  backgroundColor: "lightskyblue",
                  color: "white",
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 16,
                }}
              >
                Edit
              </Text>
              <Text
                style={{
                  backgroundColor: "lightskyblue",
                  color: "white",
                  padding: 8,
                  borderRadius: 16,
                }}
              >
                Delete
              </Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default TaskList;
