import { Flex } from "@mantine/core";
import Logo from "./logo";

const DeleteMe = () => {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      justify="center"
      align="center"
      direction="column"
      style={{ fontSize: 30 }}
    >
      <Logo />
      NG20 Mantine configuration
    </Flex>
  );
};

export default DeleteMe;
