import { Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SubTask = ({ task, i }) => {
  return (
    <Flex gap={2}>
      <Checkbox isChecked={task.checked}></Checkbox>
      <Text>{task.name}</Text>
    </Flex>
  );
};

export default SubTask;
