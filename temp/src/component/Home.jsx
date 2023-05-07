import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <Flex gap={2} justify={"space-between"} color={"black"}>
      <Box border={"2px"} minH={"100vh"} w={"30%"}>
        <Center bg={"#d6e8d5"} p={2} border={"2px"} borderColor={"green"}>
          <Text>TODO</Text>
        </Center>
        <Flex direction={"column"} gap={2} mt={3}>
          {tasks?.map(
            ({ title, category, description, subtask, status }, i) => {
              if (status === "new") {
                return (
                  <Task
                    title={title}
                    category={category}
                    description={description}
                    subtask={subtask}
                    key={i}
                  />
                );
              }
            }
          )}
        </Flex>
      </Box>
      <Box border={"2px"} minH={"100vh"} w={"30%"}>
        <Center bg={"#fff2cc"} p={2} border={"2px"} borderColor={"orange"}>
          <Text>IN PROGRESS</Text>
        </Center>
        <Flex direction={"column"} gap={2} mt={3}>
          {tasks?.map(
            ({ title, category, description, subtask, status }, i) => {
              if (status === "progress") {
                return (
                  <Task
                    title={title}
                    category={category}
                    description={description}
                    subtask={subtask}
                    key={i}
                  />
                );
              }
            }
          )}
        </Flex>
      </Box>
      <Box border={"2px"} minH={"100vh"} w={"30%"}>
        <Center bg={"#dbe8fc"} p={2} border={"2px"} borderColor={"blue"}>
          <Text>DONE</Text>
        </Center>
        <Flex direction={"column"} gap={2} mt={3}>
          {tasks?.map(
            ({ title, category, description, subtask, status }, i) => {
              if (status === "done") {
                return (
                  <Task
                    title={title}
                    category={category}
                    description={description}
                    subtask={subtask}
                    key={i}
                  />
                );
              }
            }
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
