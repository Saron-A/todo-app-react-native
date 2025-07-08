import { useContext, useState } from "react";
import { Modal, Text, TextInput, View } from "react-native";
import ListContext from "../context/ListContextDefinition.jsx";

const TaskList = () => {
  const { setInput, input, taskList, setTaskList } = useContext(ListContext);
  const [visible, setVisible] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const handleEditPress = (task) => {
    setInput(task.task);
    setEditedTask(task);
    setVisible(true);
  };

  const saveEdit = () => {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === editedTask.id ? { ...task, task: input } : task
      )
    );

    setInput("");
    setVisible(false);
    setEditedTask(null);
  };

  const handleDelete = (item) => {
    const updatedList = taskList.filter((task) => task.id !== item.id);
    setTaskList(updatedList);
  };

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
                onPress={() => handleEditPress(task)}
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
                onPress={() => handleDelete(task)}
              >
                Delete
              </Text>
            </View>
          </View>
        ))
      )}
      <Modal visible={visible} transparent={true} animationStyle="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
          }}
        >
          <View
            style={{
              gap: 16,
              shadowOffset: { width: 1, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.4,
              shadowRadius: 5,
              backgroundColor: "white",
              padding: 16,
              width: 300,
              height: 200,
              borderRadius: 16,
              elevation: 4, // Android shadow
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginVertical: 8,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Edit Task
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 8,
                borderColor: "black",
                borderRadius: 16,
              }}
              value={input}
              onChangeText={(newText) => setInput(newText)}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "lightskyblue",
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  color: "white",
                  alignSelf: "center",
                }}
                onPress={() => saveEdit()}
              >
                Change
              </Text>
              <Text
                style={{
                  backgroundColor: "lightskyblue",
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  color: "white",
                  alignSelf: "center",
                }}
                onPress={() => (setVisible(false), setInput(""))}
              >
                Cancel
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskList;
