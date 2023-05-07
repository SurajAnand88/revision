import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SubTask from "./SubTask";

const Task = ({ title, category, description, subtask }) => {
  return (
    <Flex
      direction={"column"}
      border={"2px"}
      align={"center"}
      gap={3}
      py={3}
      w={"80%"}
      m={"auto"}
    >
      <Text>{title}</Text>
      <Flex gap={3}>
        <Text>{category}</Text>
        <Button colorScheme="red" size={"10px"} fontSize={"10px"} px={2}>
          Delete
        </Button>
      </Flex>
      <Text>{description}</Text>
      {subtask?.map((task, i) => {
        return <SubTask task={task} key={i} />;
      })}
    </Flex>
  );
};

export default Task;
